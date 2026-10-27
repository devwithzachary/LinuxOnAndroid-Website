/**
 * Linux on Android - Client-side Interactive Logic
 * Domain: https://linuxonandroid.com/
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  
  // Close mobile nav when clicking outside
  document.addEventListener('click', (e) => {
    if (navLinks && navLinks.classList.contains('show')) {
      if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
        navLinks.classList.remove('show');
      }
    }
  }); // click-outside

// Interactive Software Stack Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const stackPanels = document.querySelectorAll('.stack-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetStack = btn.getAttribute('data-stack');

      // Update active button state
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update active panel state
      stackPanels.forEach(panel => {
        if (panel.id === `stack-${targetStack}`) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });

  // Smooth scroll offset handling for sticky header
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = window.innerWidth <= 1024 ? 68 : 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Close mobile nav if open
        if (navLinks && navLinks.classList.contains('show')) {
          navLinks.classList.remove('show');
        }
      }
    });
  });

  // ==========================================================================
  // Interactive Screenshots Showcase Logic
  // ==========================================================================
  const showcaseScreens = [
    {
      id: 'dashboard',
      badge: 'CONTAINER MANAGEMENT',
      title: 'Multi-Container Dashboard',
      image: 'assets/1_dashboard.png',
      alt: 'Linux on Android Multi-Container Dashboard',
      desc: 'Manage multiple isolated Linux environments on a single Android device. Start, stop, monitor, or launch interactive sessions for each container independently with clear status indicators and quick action shortcuts.',
      highlights: [
        'Run multiple distributions side-by-side (e.g. Ubuntu + Alpine)',
        'Instant status badges displaying running vs stopped container states',
        'One-tap quick actions for Terminal, Hardware Overview, and Settings',
        'Fast container setup wizard via the prominent + New Container button'
      ]
    },
    {
      id: 'terminal',
      badge: 'CONCURRENT SESSIONS',
      title: 'Multi-Tab Terminal Emulator',
      image: 'assets/2_terminal.png',
      alt: 'Linux on Android Multi-Tab Terminal Emulator',
      desc: 'Built-in hardware-accelerated VT100/XTerm terminal emulator supporting multiple simultaneous POSIX PTY shell sessions. Switch between active containers and running processes with a single tap.',
      highlights: [
        'Independent concurrent tabs for running background daemons and foreground shells',
        'Termux-style 7-column pinned hotkeys grid (ESC, TAB, CTRL, ALT, cursor navigation)',
        'Custom hotkey editor and session termination confirmation safety prompt',
        'Full 256-color ANSI support for rich CLI utilities like top, htop, and neovim'
      ]
    },
    {
      id: 'overview',
      badge: 'LIVE HARDWARE TELEMETRY',
      title: 'Real-Time Resource Dials & Services',
      image: 'assets/3_container_overview.png',
      alt: 'Linux on Android Container Overview and Resource Dials',
      desc: 'Monitor container health at a glance with live dials for CPU load, RAM allocation, and internal storage consumption. Easily inspect listening network ports and trigger one-tap service launchers.',
      highlights: [
        'Real-time hardware dials displaying instantaneous CPU, RAM, and Disk consumption',
        'Quick launchers for OpenSSH, Web Terminal (ttyd), and VNC Desktop',
        'Active listening port monitor for network troubleshooting and remote access',
        'Container lifecycle controls: Start, Stop, and Restart with live feedback'
      ]
    },
    {
      id: 'software',
      badge: '1-CLICK WORKSTATIONS',
      title: 'Software Hub & Desktop Stacks',
      image: 'assets/4_software_hub.png',
      alt: 'Linux on Android Software Hub & Developer Stacks',
      desc: 'Transform your mobile device into a graphical workstation or coding hub. Install pre-configured development stacks and full desktop environments with a single tap.',
      highlights: [
        'Full XFCE4 Graphical Desktop GUI with TigerVNC and browser-based noVNC',
        'Rootless Docker tools (udocker) and Visual Studio Code Server (code-server)',
        'Python 3 data stack, Node.js runtime, and Android SDK platform tools',
        'Lightweight NGINX web server, embedded SQLite, and OpenSSH remote daemon'
      ]
    },
    {
      id: 'distros',
      badge: 'DISTRO CATALOG',
      title: '7 Official Linux Distributions',
      image: 'assets/5_distro_wizard.png',
      alt: 'Linux on Android Distro Setup Wizard',
      desc: 'Choose from 7 officially supported Linux distributions. The setup wizard automatically detects your CPU architecture, verifies SHA256 checksums, and configures mirrors for maximum download speeds.',
      highlights: [
        'Official distributions: Ubuntu, Debian, Fedora, Alpine, Arch, Kali, and Void Linux',
        'Automatic CPU architecture detection (ARM64, x86_64, ARMv7)',
        'Geographic fast mirror resolution and verified rootfs tarball integrity',
        'Customize container names, rootfs paths, and user credentials effortlessly'
      ]
    },
    {
      id: 'onboarding',
      badge: '100% USER-SPACE ROOTLESS',
      title: 'Rootless Onboarding & Zero Setup',
      image: 'assets/6_welcome_onboarding.png',
      alt: 'Linux on Android Rootless Onboarding Welcome Screen',
      desc: 'Experience the power of native Linux on Android without compromising security. Complete Linux Installer runs 100% in user-space via PRoot ptrace syscall interception.',
      highlights: [
        'Zero root required: runs without unlocking bootloaders or voiding warranties',
        'Complete file isolation keeping host Android operating system completely safe',
        'Instant onboarding: launch your first container in under 60 seconds',
        'Automatic storage binding to access internal SD card storage seamlessly'
      ]
    }
  ];

  let currentShowcaseIndex = 0;
  const showcaseImg = document.getElementById('showcase-img');
  const showcaseBadge = document.getElementById('showcase-badge');
  const showcaseTitle = document.getElementById('showcase-title');
  const showcaseDesc = document.getElementById('showcase-desc');
  const showcaseHighlights = document.getElementById('showcase-highlights');
  const showcaseCounter = document.getElementById('showcase-counter');
  const showcaseTabs = document.querySelectorAll('.showcase-tab');
  const showcaseDots = document.querySelectorAll('.showcase-dots .dot');
  const showcaseThumbs = document.querySelectorAll('.showcase-thumbs .thumb-btn');
  const btnPrev = document.getElementById('ctrl-prev');
  const btnNext = document.getElementById('ctrl-next');

  // Preload screenshot images for instant transitions
  showcaseScreens.forEach(screen => {
    const img = new Image();
    img.src = screen.image;
  });

  function updateShowcase(index) {
    if (index < 0) index = showcaseScreens.length - 1;
    if (index >= showcaseScreens.length) index = 0;
    currentShowcaseIndex = index;

    const data = showcaseScreens[index];

    // Smooth image crossfade
    if (showcaseImg) {
      showcaseImg.classList.add('fade-out');
      setTimeout(() => {
        showcaseImg.src = data.image;
        showcaseImg.alt = data.alt;
        showcaseImg.classList.remove('fade-out');
      }, 150);
    }

    if (showcaseBadge) showcaseBadge.textContent = data.badge;
    if (showcaseTitle) showcaseTitle.textContent = data.title;
    if (showcaseDesc) showcaseDesc.textContent = data.desc;

    if (showcaseHighlights) {
      showcaseHighlights.innerHTML = data.highlights
        .map(hl => '<div class="highlight-item"><span class="highlight-icon">✓</span><span class="highlight-text">' + hl + '</span></div>')
        .join('');
    }

    if (showcaseCounter) {
      showcaseCounter.textContent = (index + 1) + ' of ' + showcaseScreens.length;
    }

    // Update active tab button
    showcaseTabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === index);
      tab.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });

    // Update active dot
    showcaseDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    // Update active thumbnail
    showcaseThumbs.forEach((thumb, i) => {
      thumb.classList.toggle('active', i === index);
    });
  }

  // Showcase event listeners
  showcaseTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.getAttribute('data-index'), 10);
      updateShowcase(idx);
    });
  });

  showcaseDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      updateShowcase(idx);
    });
  });

  showcaseThumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const idx = parseInt(thumb.getAttribute('data-index'), 10);
      updateShowcase(idx);
    });
  });

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      updateShowcase(currentShowcaseIndex - 1);
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      updateShowcase(currentShowcaseIndex + 1);
    });
  }

  // Keyboard navigation when user presses Left/Right arrows and showcase is in viewport
  document.addEventListener('keydown', (e) => {
    const showcaseSection = document.getElementById('showcase');
    if (!showcaseSection) return;

    const rect = showcaseSection.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!inView) return;

    if (e.key === 'ArrowLeft') {
      updateShowcase(currentShowcaseIndex - 1);
    } else if (e.key === 'ArrowRight') {
      updateShowcase(currentShowcaseIndex + 1);
    }
  });

});
