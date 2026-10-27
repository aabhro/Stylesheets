(function (global) {
  "use strict";

  var reduceQuery = global.matchMedia ? global.matchMedia("(prefers-reduced-motion: reduce)") : null;
  var reduced = function () { return !!(reduceQuery && reduceQuery.matches); };

  function parseTime(value) {
    var number = parseFloat(value) || 0;
    return value && value.indexOf("ms") !== -1 ? number : number * 1000;
  }

  function maxMotionTime(element) {
    if (!element || reduced()) return 0;
    var nodes = [element].concat(Array.prototype.slice.call(element.querySelectorAll("*")));
    var max = 0;
    nodes.forEach(function (node) {
      var style = global.getComputedStyle(node);
      var durations = style.transitionDuration.split(",").map(parseTime);
      var delays = style.transitionDelay.split(",").map(parseTime);
      for (var i = 0; i < durations.length; i++) {
        max = Math.max(max, durations[i] + (delays[i % delays.length] || 0));
      }
    });
    return max;
  }

  function waitForMotion(element) {
    var duration = maxMotionTime(element);
    return new Promise(function (resolve) {
      global.setTimeout(resolve, duration > 1 ? duration + 30 : 0);
    });
  }

  async function setOpen(element, open, trigger) {
    if (!element) return;
    if (trigger) trigger.setAttribute("aria-expanded", open ? "true" : "false");

    if (open) {
      if (trigger) element._motionTrigger = trigger;
      element.hidden = false;
      element.removeAttribute("inert");
      element.setAttribute("aria-hidden", "false");
      element.dataset.state = "opening";
      void element.offsetWidth;
      requestAnimationFrame(function () {
        if (element.dataset.state === "opening") element.dataset.state = "open";
        if (element.classList.contains("m-dialog")) {
          var first = element.querySelector("button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])");
          if (first) first.focus();
        }
      });
      return;
    }

    element.dataset.state = "closing";
    element.setAttribute("aria-hidden", "true");
    element.setAttribute("inert", "");
    await waitForMotion(element);
    if (element.dataset.state === "closing") {
      element.hidden = true;
      element.dataset.state = "closed";
      if (element._motionTrigger && !element.classList.contains("m-toast")) element._motionTrigger.focus();
    }
  }

  function replay(element, className) {
    if (!element) return;
    className = className || "m-icon-swap";
    element.classList.remove(className);
    void element.offsetWidth;
    element.classList.add(className);
    element.addEventListener("animationend", function () {
      element.classList.remove(className);
    }, { once: true });
  }

  function swapText(element, value) {
    if (!element || element.textContent === String(value)) return;
    element.textContent = String(value);
    replay(element, "m-text-swap");
  }

  function showToast(element, duration) {
    if (!element) return;
    duration = typeof duration === "number" ? duration : 3200;
    if (element._motionTimer) global.clearTimeout(element._motionTimer);
    element.hidden = false;
    element.removeAttribute("inert");
    element.setAttribute("aria-hidden", "false");
    element.dataset.state = "opening";
    requestAnimationFrame(function () { element.dataset.state = "open"; });
    element._motionTimer = global.setTimeout(function () {
      setOpen(element, false);
    }, duration);
  }


  function clearText(element) {
    if (!element) return;
    element.classList.remove("is-clearing");
    void element.offsetWidth;
    element.classList.add("is-clearing");
    element.addEventListener("animationend", function () {
      if ("value" in element) element.value = "";
      else element.textContent = "";
      element.classList.remove("is-clearing");
    }, { once: true });
  }

  function morphText(element, value) {
    if (!element || element.textContent === String(value)) return;
    var originalWidth = element.getBoundingClientRect().width;
    element.style.width = originalWidth + "px";
    element.style.maxWidth = "none";
    element.classList.add("m-text-morph");
    element.textContent = String(value);
    var targetWidth = element.scrollWidth;
    requestAnimationFrame(function () {
      element.style.width = targetWidth + "px";
    });
    global.setTimeout(function () {
      element.style.width = "";
      element.style.maxWidth = "";
    }, reduced() ? 0 : 330);
    replay(element, "m-text-swap-soft");
  }

  function selectTab(tab, group) {
    if (!tab) return;
    group = group || tab.closest(".m-tabs");
    if (!group) return;
    var tabs = Array.prototype.slice.call(group.querySelectorAll('[role="tab"]'));
    tabs.forEach(function (item) {
      var active = item === tab;
      item.setAttribute("aria-selected", active ? "true" : "false");
      item.tabIndex = active ? 0 : -1;
    });
    var indicator = group.querySelector(".m-tabs__indicator");
    if (indicator) {
      indicator.style.setProperty("--m-tab-left", tab.offsetLeft + "px");
      indicator.style.setProperty("--m-tab-width", tab.offsetWidth + "px");
    }
    var panels = group.querySelectorAll('[role="tabpanel"]');
    panels.forEach(function (panel) {
      var active = panel.id === tab.getAttribute("aria-controls");
      panel.hidden = !active;
    });
  }

  function bindTilt(root) {
    if (reduced() || !global.matchMedia || !global.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    root.querySelectorAll("[data-motion-tilt]").forEach(function (element) {
      if (element.dataset.motionTiltBound) return;
      element.dataset.motionTiltBound = "true";
      element.classList.add("m-tilt");
      element.addEventListener("pointermove", function (event) {
        var rect = element.getBoundingClientRect();
        var x = (event.clientX - rect.left) / rect.width;
        var y = (event.clientY - rect.top) / rect.height;
        element.style.setProperty("--m-tilt-x", ((0.5 - y) * 5).toFixed(2) + "deg");
        element.style.setProperty("--m-tilt-y", ((x - 0.5) * 6).toFixed(2) + "deg");
      });
      element.addEventListener("pointerleave", function () {
        element.style.setProperty("--m-tilt-x", "0deg");
        element.style.setProperty("--m-tilt-y", "0deg");
      });
    });
  }

  function bind(root) {
    root = root || document;
    bindTilt(root);
    root.addEventListener("click", function (event) {
      if (!event.target.closest) return;
      var openTrigger = event.target.closest("[data-motion-open]");
      if (openTrigger) {
        var selector = openTrigger.getAttribute("data-motion-open");
        var target = selector && document.querySelector(selector);
        if (target) setOpen(target, true, openTrigger);
      }

      var closeTrigger = event.target.closest("[data-motion-close]");
      if (closeTrigger) {
        var closeSelector = closeTrigger.getAttribute("data-motion-close");
        var closeTarget = closeSelector ? document.querySelector(closeSelector) : closeTrigger.closest(".m-dialog, .m-dropdown, .m-panel, .m-toast");
        if (closeTarget) {
          var opener = closeTarget.id ? document.querySelector('[data-motion-open="#' + closeTarget.id + '"]') : null;
          setOpen(closeTarget, false, opener);
        }
      }

      var swapTrigger = event.target.closest("[data-motion-swap]");
      if (swapTrigger) {
        var selectorSwap = swapTrigger.getAttribute("data-motion-swap");
        var targetSwap = selectorSwap && document.querySelector(selectorSwap);
        if (targetSwap) swapText(targetSwap, swapTrigger.getAttribute("data-motion-text") || swapTrigger.textContent);
      }

      var replayTrigger = event.target.closest("[data-motion-replay]");
      if (replayTrigger) {
        var replaySelector = replayTrigger.getAttribute("data-motion-replay");
        var replayTarget = replaySelector ? document.querySelector(replaySelector) : replayTrigger;
        if (replayTarget) replay(replayTarget, replayTrigger.getAttribute("data-motion-class") || "m-icon-swap");
      }

      var toastTrigger = event.target.closest("[data-motion-toast]");
      if (toastTrigger) {
        var toastTarget = document.querySelector(toastTrigger.getAttribute("data-motion-toast"));
        if (toastTarget) showToast(toastTarget, Number(toastTrigger.getAttribute("data-motion-duration")) || 3200);
      }

      var tab = event.target.closest('.m-tabs [role="tab"]');
      if (tab) selectTab(tab);
    });

    root.addEventListener("keydown", function (event) {
      var activeDialog = event.target.closest && event.target.closest('.m-dialog[data-state="open"]');
      if (activeDialog && event.key === "Tab") {
        var focusables = Array.prototype.slice.call(activeDialog.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(function (node) {
          return !node.hidden && node.getAttribute("aria-hidden") !== "true";
        });
        if (!focusables.length) {
          event.preventDefault();
          var dialogPanel = activeDialog.querySelector(".m-dialog__panel");
          if (dialogPanel) {
            dialogPanel.setAttribute("tabindex", "-1");
            dialogPanel.focus();
          }
        } else if (event.shiftKey && document.activeElement === focusables[0]) {
          event.preventDefault();
          focusables[focusables.length - 1].focus();
        } else if (!event.shiftKey && document.activeElement === focusables[focusables.length - 1]) {
          event.preventDefault();
          focusables[0].focus();
        }
      }

      if (event.key === "Escape") {
        var dialog = document.querySelector('.m-dialog[data-state="open"]');
        if (dialog) {
          var opener = document.querySelector('[data-motion-open="#' + dialog.id + '"]');
          setOpen(dialog, false, opener);
          if (opener) opener.focus();
          return;
        }
        var surface = document.querySelector('.m-dropdown[data-state="open"], .m-panel[data-state="open"]');
        if (surface) setOpen(surface, false);
      }

      var tab = event.target.closest && event.target.closest('.m-tabs [role="tab"]');
      if (tab && ["ArrowLeft", "ArrowRight", "Home", "End"].indexOf(event.key) !== -1) {
        var tabs = Array.prototype.slice.call(tab.closest(".m-tabs").querySelectorAll('[role="tab"]'));
        var index = tabs.indexOf(tab);
        if (event.key === "ArrowRight") index = (index + 1) % tabs.length;
        if (event.key === "ArrowLeft") index = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") index = 0;
        if (event.key === "End") index = tabs.length - 1;
        event.preventDefault();
        tabs[index].focus();
        selectTab(tabs[index]);
      }
    });
  }

  global.Motion = {
    prefersReducedMotion: reduced,
    setOpen: setOpen,
    replay: replay,
    swapText: swapText,
    clearText: clearText,
    morphText: morphText,
    showToast: showToast,
    selectTab: selectTab,
    bind: bind
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { bind(document); });
  } else {
    bind(document);
  }
})(window);
