<template>
  <body class="bg-white">
    <script src="assets/js/theme.bundle.js"></script>
    <!--////////////////// PreLoader Start//////////////////////-->
    <div class="loader">
      <!--Placeholder animated layout for preloader-->
      <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
          <!--Sidebar start-->
          <aside class="page-sidebar aside-dark placeholder-wave">
            <div class="placeholder col-12 h-100 bg-dark"></div>
          </aside>
          <main class="page-content d-flex flex-column flex-row-fluid">
            <div
              class="
                content
                flex-column
                p-4
                pb-0
                d-flex
                justify-content-center
                align-items-center
                flex-column-fluid
                position-relative
              "
            >
              <div
                class="
                  w-100
                  h-100
                  position-relative
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-loader anim-spinner me-2"
                >
                  <line x1="12" y1="2" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                  <line x1="2" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                </svg>
                <div>
                  <span>Loading...</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
    <!--////////////////// /.PreLoader END//////////////////////-->

    <div class="d-flex flex-column flex-root">
      <!--Page-->
      <div class="page d-flex flex-row flex-column-fluid">
        <!--///////////Page sidebar begin///////////////-->
        <aside class="page-sidebar aside-light bg-white border-end">
          <div class="h-100 flex-column d-flex" data-simplebar>
            <!--Aside-logo-->
            <div class="aside-logo p-3 position-relative">
              <a href="index.html" class="d-block px-2">
                <div
                  class="d-flex align-items-center flex-no-wrap text-truncate"
                >
                  <!--Sidebar-icon-->
                  <span
                    class="
                      sidebar-icon
                      fs-5
                      lh-1
                      text-white
                      rounded-circle
                      bg-primary
                      fw-bold
                    "
                  >
                    A
                  </span>
                  <span class="sidebar-text">
                    <!--Sidebar-text-->
                    <span
                      class="
                        sidebar-text
                        text-truncate
                        fs-4
                        text-uppercase
                        fw-bolder
                      "
                    >
                      Assan
                    </span>
                  </span>
                </div>
              </a>

              <!--Navbar close button for down-991px divices-->
              <div
                class="
                  d-flex
                  sidebar-close
                  d-lg-none
                  align-items-center
                  position-absolute
                  end-0
                  top-50
                  translate-middle-y
                  me-3
                "
              >
                <a
                  href="#"
                  class="
                    nav-link
                    size-35
                    rounded-circle
                    d-flex
                    align-items-center
                    justify-content-center
                    p-0
                  "
                >
                  <i data-feather="x" class="fe-2x"></i>
                </a>
              </div>
            </div>
            <!--Aside-Menu-->
            <div class="aside-menu px-2 my-auto flex-column-fluid">
              <nav class="flex-grow-1 h-100" id="page-navbar">
                <!--:Sidebar nav-->
                <ul class="nav flex-column collapse-group collapse d-flex pt-4">
                  <li
                    class="
                      nav-item
                      sidebar-title
                      text-truncate
                      opacity-25
                      small
                    "
                  >
                    <i class="bi bi-three-dots align-middle"></i>
                    <span>Main</span>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#dashboards"
                      data-bs-toggle="collapse"
                      class="
                        nav-link
                        d-flex
                        align-items-center
                        text-truncate
                        active
                      "
                      aria-expanded="false"
                    >
                      <span class="sidebar-icon">
                        <i data-feather="home" class="fe-2x"></i>
                      </span>
                      <!--Sidebar nav text-->
                      <span class="sidebar-text">Dashboard</span>
                    </a>
                    <ul
                      data-bs-target="#dashboards"
                      id="dashboards"
                      class="sidebar-dropdown list-unstyled collapse"
                    >
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="index.html">Default</a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="index-dashboard-alt.html">
                          Dashboard Alt
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a
                      data-bs-toggle="collapse"
                      class="nav-link d-flex align-items-center text-truncate"
                      aria-expanded="false"
                      href="#ui-pages"
                    >
                      <span class="sidebar-icon">
                        <i data-feather="file-text" class="fe-2x"></i>
                      </span>
                      <!--Sidebar nav text-->
                      <span class="sidebar-text">Pages</span>
                    </a>
                    <ul
                      id="ui-pages"
                      class="sidebar-dropdown list-unstyled collapse"
                    >
                      <li class="sidebar-item">
                        <a
                          href="#pages-account"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          class="sidebar-link"
                        >
                          Account
                        </a>
                        <ul
                          id="pages-account"
                          class="
                            sidebar-dropdown
                            list-unstyled
                            collapse
                            sd-second-level
                          "
                        >
                          <li class="sidebar-item">
                            <a class="sidebar-link" href="account-general.html">
                              General
                            </a>
                          </li>
                          <li class="sidebar-item">
                            <a class="sidebar-link" href="account-billing.html">
                              Billing
                            </a>
                          </li>
                          <li class="sidebar-item">
                            <a
                              class="sidebar-link"
                              href="account-contacts.html"
                            >
                              Contacts
                            </a>
                          </li>
                          <li class="sidebar-item">
                            <a
                              class="sidebar-link"
                              href="account-security.html"
                            >
                              Security
                            </a>
                          </li>
                          <li class="sidebar-item">
                            <a
                              class="sidebar-link"
                              href="account-notifications.html"
                            >
                              Notification
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="#pages-profile"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          class="sidebar-link"
                        >
                          Profile
                        </a>
                        <ul
                          id="pages-profile"
                          class="
                            sidebar-dropdown
                            list-unstyled
                            collapse
                            sd-second-level
                          "
                        >
                          <li class="sidebar-item">
                            <a class="sidebar-link" href="profile.html">
                              Overview
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="#pages-authentication"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          class="sidebar-link"
                        >
                          Authentication
                        </a>
                        <ul
                          id="pages-authentication"
                          class="
                            sidebar-dropdown
                            list-unstyled
                            collapse
                            sd-second-level
                          "
                        >
                          <li class="sidebar-item">
                            <a
                              class="sidebar-link"
                              href="page-auth-signin.html"
                            >
                              SignIn
                            </a>
                          </li>
                          <li class="sidebar-item">
                            <a
                              class="sidebar-link"
                              href="page-auth-signup.html"
                            >
                              SignUp
                            </a>
                          </li>
                          <li class="sidebar-item">
                            <a
                              class="sidebar-link"
                              href="page-auth-recover-pass.html"
                            >
                              Recover password
                            </a>
                          </li>
                          <li class="sidebar-item">
                            <a
                              class="sidebar-link"
                              href="page-auth-success.html"
                            >
                              Success
                            </a>
                          </li>
                          <li class="sidebar-item">
                            <a
                              class="sidebar-link"
                              href="page-auth-lockscreen.html"
                            >
                              lockscreen
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="page-invoice.html">
                          Invoice
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="page-tasks.html">Tasks</a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="page-pricing.html">
                          Pricing
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="#pages-projects"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          class="sidebar-link"
                        >
                          Projects
                        </a>
                        <ul
                          id="pages-projects"
                          class="
                            sidebar-dropdown
                            list-unstyled
                            collapse
                            sd-second-level
                          "
                        >
                          <li class="sidebar-item">
                            <a class="sidebar-link" href="projects-list.html">
                              List
                            </a>
                          </li>
                          <li class="sidebar-item">
                            <a class="sidebar-link" href="project-detail.html">
                              Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="page-404.html">
                          404 Error
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="page-blank.html">
                          Blank Page
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li
                    class="
                      nav-item
                      mt-2
                      sidebar-title
                      text-truncate
                      small
                      opacity-25
                    "
                  >
                    <i class="bi bi-three-dots align-middle"></i>
                    <span>Apps</span>
                  </li>
                  <li class="nav-item">
                    <a
                      href="app-inbox.html"
                      class="nav-link d-flex align-items-center text-truncate"
                    >
                      <span class="sidebar-icon">
                        <i data-feather="inbox" class="fe-2x"></i>
                      </span>
                      <span class="sidebar-text">
                        Inbox
                        <span
                          class="badge rounded-pill bg-primary small lh-1 ms-3"
                        >
                          1 new
                        </span>
                      </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="app-chat.html"
                      class="nav-link d-flex align-items-center text-truncate"
                    >
                      <span class="sidebar-icon">
                        <i data-feather="message-square" class="fe-2x"></i>
                      </span>
                      <span class="sidebar-text">Chat</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="app-calendar.html"
                      class="nav-link d-flex align-items-center text-truncate"
                    >
                      <span class="sidebar-icon">
                        <i data-feather="calendar" class="fe-2x"></i>
                      </span>
                      <span class="sidebar-text">Calendar</span>
                    </a>
                  </li>
                  <li
                    class="
                      nav-item
                      mt-2
                      sidebar-title
                      text-truncate
                      small
                      opacity-25
                    "
                  >
                    <i class="bi bi-three-dots align-middle"></i>
                    <span>Features</span>
                  </li>
                  <li class="nav-item">
                    <a
                      href="widgets.html"
                      class="nav-link d-flex align-items-center text-truncate"
                    >
                      <span class="sidebar-icon">
                        <i data-feather="activity" class="fe-2x"></i>
                      </span>
                      <span class="sidebar-text">
                        Widgets
                        <span
                          class="badge rounded-pill bg-success small lh-1 ms-3"
                        >
                          50+
                        </span>
                      </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#layouts"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      class="nav-link d-flex align-items-center text-truncate"
                    >
                      <span class="sidebar-icon">
                        <i data-feather="layout" class="fe-2x"></i>
                      </span>
                      <!--Sidebar nav text-->
                      <span class="sidebar-text">Layouts</span>
                    </a>
                    <ul
                      id="layouts"
                      class="sidebar-dropdown list-unstyled collapse"
                    >
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="layout-compact.html">
                          Compact
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="layout-horizontal.html">
                          Horizontal
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    class="
                      nav-item
                      mt-2
                      sidebar-title
                      text-truncate
                      small
                      opacity-25
                    "
                  >
                    <i class="bi bi-three-dots align-middle"></i>
                    <span>Components</span>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#ui-components"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      class="nav-link d-flex align-items-center text-truncate"
                    >
                      <span class="sidebar-icon">
                        <i data-feather="tool" class="fe-2x"></i>
                      </span>
                      <!--Sidebar nav text-->
                      <span class="sidebar-text">UI Components</span>
                    </a>
                    <ul
                      id="ui-components"
                      class="sidebar-dropdown list-unstyled collapse"
                    >
                      <li class="sidebar-item">
                        <a
                          class="sidebar-link"
                          href="ui-component-animations.html"
                        >
                          Animations
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          class="sidebar-link"
                          href="ui-component-avatars.html"
                        >
                          Avatars
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          class="sidebar-link"
                          href="ui-component-accordion.html"
                        >
                          Accordion
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="ui-component-alerts.html">
                          Alerts
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="ui-component-badges.html">
                          Badges
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          class="sidebar-link"
                          href="ui-component-buttons.html"
                        >
                          Buttons
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="ui-component-cards.html">
                          Cards
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          class="sidebar-link"
                          href="ui-component-carousel.html"
                        >
                          Carousel
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          class="sidebar-link"
                          href="ui-component-collapse.html"
                        >
                          Collapse
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          class="sidebar-link"
                          href="ui-component-dropdown.html"
                        >
                          Dropdown
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="ui-component-modals.html">
                          Modals
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          class="sidebar-link"
                          href="ui-component-icons-feather.html"
                        >
                          Feather Icons
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          class="sidebar-link"
                          href="ui-component-icons-bootstrap.html"
                        >
                          Bootstrap Icons
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          class="sidebar-link"
                          href="ui-component-progress.html"
                        >
                          Progress
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          class="sidebar-link"
                          href="ui-component-spinners.html"
                        >
                          Spinners
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          class="sidebar-link"
                          href="ui-component-typography.html"
                        >
                          Typography
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="ui-component-toast.html">
                          Toast
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          class="sidebar-link"
                          href="ui-component-tooltip-popovers.html"
                        >
                          Tooltip & popovers
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a
                      href="charts.html"
                      class="nav-link d-flex align-items-center text-truncate"
                    >
                      <span class="sidebar-icon">
                        <i data-feather="bar-chart" class="fe-2x"></i>
                      </span>
                      <span class="sidebar-text">Charts</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="maps.html"
                      class="nav-link d-flex align-items-center text-truncate"
                    >
                      <span class="sidebar-icon">
                        <i data-feather="map" class="fe-2x"></i>
                      </span>
                      <span class="sidebar-text">Maps</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="datatables.html"
                      class="nav-link d-flex align-items-center text-truncate"
                    >
                      <span class="sidebar-icon">
                        <i data-feather="list" class="fe-2x"></i>
                      </span>
                      <span class="sidebar-text">Datatables</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#component-forms"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      class="nav-link d-flex align-items-center text-truncate"
                    >
                      <span class="sidebar-icon">
                        <i data-feather="edit-3" class="fe-2x"></i>
                      </span>
                      <!--Sidebar nav text-->
                      <span class="sidebar-text">Forms</span>
                    </a>
                    <ul
                      id="component-forms"
                      class="sidebar-dropdown list-unstyled collapse"
                    >
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="ui-form-bootstrap.html">
                          Bootstrap
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="ui-form-editor.html">
                          Editor
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="ui-form-stepper.html">
                          Stepper
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="ui-form-upload.html">
                          Upload
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          class="sidebar-link"
                          href="ui-form-daterange-picker.html"
                        >
                          Daterangepicker
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="ui-form-validation.html">
                          Validation
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="ui-form-choices.html">
                          Choices
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="ui-form-inputmask.html">
                          Inputmask
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#multi-level"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                    >
                      <div class="d-flex align-items-center">
                        <span class="sidebar-icon">
                          <i data-feather="layers" class="fe-2x"></i>
                        </span>
                        <span class="sidebar-text">Multi level</span>
                      </div>
                    </a>
                    <ul
                      id="multi-level"
                      class="collapse sidebar-dropdown list-unstyled mb-0"
                    >
                      <li class="sidebar-item">
                        <a
                          href="#level-2"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          class="sidebar-link"
                        >
                          Level Two
                        </a>
                        <ul
                          id="level-2"
                          class="collapse sidebar-dropdown list-unstyled mb-0"
                        >
                          <li class="sidebar-item">
                            <a
                              href="#level-3"
                              data-bs-toggle="collapse"
                              aria-expanded="false"
                              class="sidebar-link"
                            >
                              Level two item 2
                            </a>
                            <ul
                              id="level-3"
                              class="
                                collapse
                                sidebar-dropdown
                                list-unstyled
                                mb-0
                              "
                            >
                              <li class="sidebar-item">
                                <a href="#!" class="sidebar-link">
                                  Level three item 1
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <!--Aside-footer-->
            <footer class="aside-footer p-3">
              <div class="p-3 bg-primary text-white rounded-2">
                <p class="mb-0 pb-2">Release your maximal potencial software</p>
                <!--Action button-->
                <a
                  href="#!.html"
                  class="btn rounded-pill btn-white text-truncate btn-sm"
                >
                  Upgrade Pro
                </a>
              </div>
            </footer>
          </div>
        </aside>
        <!--///////////Page Sidebar End///////////////-->

        <!--///////////Page content wrapper///////////////-->
        <main class="page-content d-flex flex-column flex-row-fluid">
          <!--//page-header//-->
          <header
            class="navbar py-0 page-header navbar-expand navbar-light px-4"
          >
            <a href="index.html" class="navbar-brand d-block d-lg-none">
              <div class="d-flex align-items-center flex-no-wrap text-truncate">
                <!--Sidebar-icon-->
                <span
                  class="
                    sidebar-icon
                    bg-primary
                    rounded-circle
                    size-40
                    text-white
                  "
                >
                  A
                </span>
              </div>
            </a>
            <ul class="navbar-nav d-flex align-items-center h-100">
              <li
                class="
                  nav-item
                  d-none d-lg-flex
                  flex-column
                  h-100
                  me-lg-2
                  align-items-center
                  justify-content-center
                "
              >
                <a
                  href="#"
                  class="
                    sidebar-trigger
                    hover-bg-primary
                    nav-link
                    rounded-circle
                    size-35
                    d-flex
                    align-items-center
                    justify-content-center
                    p-0
                  "
                >
                  <i data-feather="arrow-left" class="fe-1x align-middle"></i>
                </a>
              </li>
              <li
                class="
                  nav-item
                  d-flex
                  flex-column
                  me-lg-2
                  h-100
                  justify-content-center
                  dropdown
                "
              >
                <a
                  href="javascript:void(0)"
                  data-bs-toggle="dropdown"
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    hover-bg-primary
                    nav-link
                    size-35
                    p-0
                    rounded-circle
                  "
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  <i data-feather="search" class="fe-1x align-middle"></i>
                </a>

                <!--Search dropdown menu-->
                <div
                  class="
                    dropdown-menu
                    p-0
                    dropdown-menu-sm
                    overflow-hidden
                    mt-0
                  "
                >
                  <!--Search form-->
                  <form>
                    <div
                      class="d-flex align-items-center p-1 border-bottom ps-4"
                    >
                      <div class="text-muted">
                        <i data-feather="search" class="fe-1x align-middle"></i>
                      </div>
                      <input
                        type="text"
                        autofocus
                        class="
                          form-control
                          rounded-0
                          py-3
                          ps-2
                          border-0
                          shadow-none
                        "
                        placeholder="Search everything..."
                      />
                    </div>
                  </form>

                  <!--Recently searched-->

                  <h6 class="d-block dropdown-header pb-0 pt-3">
                    <i
                      data-feather="trending-up"
                      class="fe-1x opacity-50 align-middle me-2"
                    ></i>
                    Top searches
                  </h6>
                  <div class="p-3 d-flex flex-wrap align-items-center">
                    <!--Recently searched item-->
                    <a
                      href="#"
                      class="
                        badge
                        bg-tint-primary
                        text-dark
                        rounded-pill
                        px-3
                        py-2
                        me-2
                        mb-2
                      "
                    >
                      Campaign reports
                    </a>
                    <a
                      href="#"
                      class="
                        badge
                        bg-tint-primary
                        text-dark
                        rounded-pill
                        px-3
                        py-2
                        me-2
                        mb-2
                      "
                    >
                      Project #4535
                    </a>
                    <a
                      href="#"
                      class="
                        badge
                        bg-tint-primary
                        text-dark
                        rounded-pill
                        px-3
                        py-2
                        me-2
                        mb-2
                      "
                    >
                      Chat
                    </a>
                    <a
                      href="#"
                      class="
                        badge
                        bg-tint-primary
                        text-dark
                        rounded-pill
                        px-3
                        py-2
                        me-2
                        mb-2
                      "
                    >
                      Tasks
                    </a>
                    <a
                      href="#"
                      class="
                        badge
                        bg-tint-primary
                        text-dark
                        rounded-pill
                        px-3
                        py-2
                        me-2
                        mb-2
                      "
                    >
                      Affiliates
                    </a>
                    <a
                      href="#"
                      class="
                        badge
                        bg-tint-primary
                        text-dark
                        rounded-pill
                        px-3
                        py-2
                        me-2
                        mb-2
                      "
                    >
                      Faqs
                    </a>
                    <a
                      href="#"
                      class="
                        badge
                        bg-tint-primary
                        text-secondary
                        rounded-pill
                        px-3
                        py-2
                        me-2
                        mb-2
                      "
                    >
                      Inbox
                    </a>
                  </div>
                </div>
              </li>
              <li
                class="
                  nav-item
                  d-flex
                  flex-column
                  h-100
                  justify-content-center
                  dropdown
                "
              >
                <a
                  href="#"
                  data-bs-toggle="dropdown"
                  class="
                    hover-bg-primary
                    nav-link
                    rounded-circle
                    size-35
                    d-flex
                    align-items-center
                    justify-content-center
                    p-0
                  "
                >
                  <i data-feather="grid" class="fe-1x align-middle"></i>
                </a>
                <div class="dropdown-menu overflow-hidden p-0 mt-0">
                  <div class="row mx-0">
                    <a
                      href="#!"
                      class="
                        col-6
                        hover-bg-gray
                        text-center
                        p-4
                        border-bottom border-end
                      "
                    >
                      <img
                        src="assets/media/brand-logos/slack.svg"
                        class="height-30 w-auto"
                        alt=""
                      />
                    </a>
                    <a
                      href="#!"
                      class="col-6 hover-bg-gray text-center p-4 border-bottom"
                    >
                      <img
                        src="assets/media/brand-logos/github.svg"
                        class="height-30 w-auto"
                        alt=""
                      />
                    </a>
                    <a
                      href="#!"
                      class="col-6 hover-bg-gray text-center p-4 border-end"
                    >
                      <img
                        src="assets/media/brand-logos/atlassian.svg"
                        class="height-30 w-auto"
                        alt=""
                      />
                    </a>
                    <a href="#!" class="col-6 hover-bg-gray text-center p-4">
                      <img
                        src="assets/media/brand-logos/figma.svg"
                        class="height-30 w-auto"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto d-flex align-items-center h-100">
              <li
                class="
                  nav-item
                  dropdown
                  d-flex
                  align-items-center
                  justify-content-center
                  flex-column
                  h-100
                  me-lg-1
                "
              >
                <a
                  href="#offcanvasChat"
                  data-bs-toggle="offcanvas"
                  class="
                    nav-link
                    position-relative
                    hover-bg-primary
                    p-0
                    size-35
                    d-flex
                    align-items-center
                    justify-content-center
                    rounded-circle
                  "
                >
                  <i
                    data-feather="message-circle"
                    class="fe-1x align-middle"
                  ></i>
                  <span
                    class="
                      badge
                      p-0
                      size-5
                      rounded-circle
                      d-flex
                      align-items-center
                      justify-content-center
                      position-absolute
                      end-0
                      top-0
                      mt-1
                      me-1
                      bg-success
                      anim-scale
                    "
                  ></span>
                </a>
              </li>
              <li
                class="
                  nav-item
                  dropdown
                  d-flex
                  align-items-center
                  justify-content-center
                  flex-column
                  h-100
                  me-2 me-lg-4
                "
              >
                <a
                  href="#"
                  class="
                    nav-link
                    p-0
                    position-relative
                    size-35
                    hover-bg-primary
                    d-flex
                    align-items-center
                    justify-content-center
                    rounded-circle
                  "
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <i data-feather="activity" class="fe-2x align-middle"></i>
                  <span
                    class="
                      size-5
                      rounded-circle
                      d-flex
                      align-items-center
                      justify-content-center
                      position-absolute
                      end-0
                      top-0
                      mt-2
                      me-1
                      bg-danger
                      small
                    "
                  ></span>
                </a>

                <div
                  class="
                    dropdown-menu
                    mt-0
                    p-0
                    overflow-hidden
                    dropdown-menu-end dropdown-menu-sm
                  "
                >
                  <div
                    class="
                      d-flex
                      p-3
                      justify-content-between
                      align-items-center
                      border-bottom
                    "
                  >
                    <h5 class="me-3 mb-0">Notifications</h5>
                    <div class="flex-shrink-0">
                      <a href="#!" class="btn btn-primary btn-sm">View All</a>
                    </div>
                  </div>
                  <div class="height-290" data-simplebar>
                    <ul class="list-unstyled mb-0">
                      <li class="px-3 pt-3 h6">New</li>
                      <!--//Notification item start//-->
                      <li class="d-block">
                        <a
                          href="#"
                          class="
                            hover-bg-gray
                            px-3
                            py-2
                            text-reset
                            d-flex
                            align-items-center
                          "
                        >
                          <div class="d-block me-3">
                            <div class="avatar avatar-status status-online">
                              <img
                                src="assets/media/avatars/01.jpg"
                                class="img-fluid rounded-circle w-auto"
                                alt=""
                              />
                            </div>
                          </div>

                          <div class="flex-grow-1 flex-wrap pe-3">
                            <span class="mb-0 d-block">
                              <strong>Adam Danely</strong>
                              assigned a task to you
                              <strong>#PI-392</strong>
                            </span>
                            <small class="text-muted">Just now</small>
                          </div>
                        </a>
                      </li>
                      <!--//Notification item start//-->
                      <li class="d-block">
                        <a
                          href="#"
                          class="
                            hover-bg-gray
                            px-3
                            py-2
                            text-reset
                            d-flex
                            align-items-center
                          "
                        >
                          <div class="d-block me-3">
                            <div class="avatar avatar-status status-offline">
                              <img
                                src="assets/media/avatars/06.jpg"
                                class="img-fluid rounded-circle w-auto"
                                alt=""
                              />
                            </div>
                          </div>

                          <div class="flex-grow-1 flex-wrap pe-3">
                            <span class="mb-0 d-block">
                              <strong>Vivianna Kiser</strong>
                              just posted
                              <span>
                                "Lorem ipsum is placeholder text used in the
                                graphic, print, and industries. "
                              </span>
                            </span>
                            <small class="text-muted">2h Ago</small>
                          </div>
                        </a>
                      </li>

                      <li class="px-3 pt-3 h6">Earlier</li>
                      <!--//Notification item start//-->
                      <li class="d-block">
                        <a
                          href="#"
                          class="
                            hover-bg-gray
                            px-3
                            py-2
                            text-reset
                            d-flex
                            align-items-center
                          "
                        >
                          <span class="d-block me-3">
                            <span
                              class="
                                d-flex
                                align-items-center
                                justify-content-center
                                lh-1
                                size-50
                                bg-tint-success
                                text-success
                                rounded-circle
                              "
                            >
                              <i
                                data-feather="tool"
                                class="fe-2x align-middle"
                              ></i>
                            </span>
                          </span>

                          <div class="flex-grow-1 flex-wrap pe-3">
                            <span class="mb-0 d-block">
                              <strong>Updated</strong>
                              Your account password updated succuessfully
                            </span>
                            <small class="text-muted">2h Ago</small>
                          </div>
                        </a>
                      </li>
                      <!--//Notification item start//-->
                      <li class="d-block">
                        <a
                          href="#"
                          class="
                            hover-bg-gray
                            px-3
                            py-2
                            text-reset
                            d-flex
                            align-items-center
                          "
                        >
                          <span class="d-block me-3">
                            <span
                              class="
                                d-flex
                                align-items-center
                                justify-content-center
                                lh-1
                                size-50
                                bg-tint-danger
                                text-danger
                                rounded-circle
                              "
                            >
                              <i
                                data-feather="percent"
                                class="fe-2x align-middle"
                              ></i>
                            </span>
                          </span>

                          <div class="flex-grow-1 flex-wrap pe-3">
                            <span class="mb-0 d-block">
                              <strong>Pro discount</strong>
                              Upgrade to pro plan with 30% discount, Apply
                              coupon
                              <span class="badge bg-primary">PRO30</span>
                            </span>
                            <small class="text-muted">2h Ago</small>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li
                class="
                  nav-item
                  dropdown
                  d-flex
                  align-items-center
                  justify-content-center
                  flex-column
                  h-100
                "
              >
                <a
                  href="#"
                  class="
                    nav-link
                    dropdown-toggle
                    rounded-pill
                    p-1
                    lh-1
                    pe-1 pe-md-2
                    hover-bg-primary
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <div class="d-flex align-items-center">
                    <!--Avatar with status-->
                    <div class="avatar-status status-online me-sm-2 avatar xs">
                      <img
                        src="assets/media/avatars/01.jpg"
                        class="rounded-circle img-fluid"
                        alt=""
                      />
                    </div>
                    <span class="d-none d-md-inline-block">Noah</span>
                  </div>
                </a>

                <div
                  class="
                    dropdown-menu
                    mt-0
                    pt-0
                    dropdown-menu-end
                    overflow-hidden
                  "
                >
                  <!--User meta-->
                  <div
                    class="
                      position-relative
                      overflow-hidden
                      p-3
                      mb-3
                      border-bottom
                    "
                  >
                    <h5 class="mb-1">Noah Pierre</h5>
                    <p class="text-muted small mb-0 lh-1">
                      Full stack developer
                    </p>
                  </div>
                  <a href="#!.html" class="dropdown-item">
                    <i
                      data-feather="user"
                      class="fe-1x opacity-50 align-middle me-2"
                    ></i>
                    Profile
                  </a>
                  <a href="#!.html" class="dropdown-item">
                    <i
                      data-feather="settings"
                      class="fe-1x opacity-50 align-middle me-2"
                    ></i>
                    Settings
                  </a>
                  <a href="#!.html" class="dropdown-item">
                    <i
                      data-feather="list"
                      class="fe-1x opacity-50 align-middle me-2"
                    ></i>
                    Tasks
                  </a>
                  <hr class="mt-3 mb-1" />
                  <a
                    href="#!.html"
                    class="dropdown-item d-flex align-items-center"
                  >
                    <i
                      data-feather="log-out"
                      class="fe-1x opacity-50 align-middle me-2"
                    ></i>
                    Sign out
                  </a>
                </div>
              </li>
              <li
                class="
                  nav-item
                  dropdown
                  ms-1 ms-lg-3
                  d-flex d-lg-none
                  align-items-center
                  justify-content-center
                  flex-column
                  h-100
                "
              >
                <a
                  href="#"
                  class="
                    nav-link
                    sidebar-trigger-lg-down
                    hover-bg-primary
                    text-secondary
                    size-35
                    p-0
                    d-flex
                    align-items-center
                    justify-content-center
                    rounded-circle
                  "
                >
                  <i data-feather="menu" class="fe-2x"></i>
                </a>
              </li>
            </ul>
          </header>
          <!--Main Header End-->

          <!--//Chat offcanvas start//-->
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasChat"
            aria-labelledby="offcanvasChatLabel"
          >
            <!--Chat header-->
            <div
              class="
                offcanvas-header
                height-70
                d-flex
                align-items-center
                justify-content-between
                border-bottom
                shadow-none
              "
            >
              <div>
                <h5 class="offcanvas-title mb-0 lh-1" id="offcanvasChatLabel">
                  Adam Voges
                </h5>
                <div class="d-flex align-items-center">
                  <span
                    class="
                      size-5
                      border border-3
                      rounded-circle
                      border-success
                      me-2
                      d-block
                    "
                  ></span>
                  Online
                </div>
              </div>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <!--Chat body-->
            <div class="offcanvas-body flex-row-fluid flex-column-reverse">
              <!--User chat box-->
              <div class="d-flex pe-4 mb-4 pe-lg-5 align-items-stretch">
                <div class="me-2">
                  <img
                    src="assets/media/avatars/03.jpg"
                    class="avatar sm rounded-circle"
                    alt=""
                  />
                </div>
                <div>
                  <span
                    class="
                      small
                      text-muted
                      font-monospace
                      chat-time
                      d-block
                      mb-2
                    "
                  >
                    12:45PM
                  </span>
                  <p class="chat-user-box border">👋 Hi Noah, How are ya?</p>
                  <p class="chat-user-box border">Are you there? 🙂</p>
                </div>
              </div>

              <!--Self Chat box-->
              <div
                class="
                  d-flex
                  flex-column
                  ps-4 ps-lg-7
                  align-items-end
                  justify-content-end
                  text-end
                "
              >
                <span
                  class="
                    small
                    d-block
                    mb-1
                    text-muted
                    chat-time
                    ps-2
                    font-monospace
                  "
                >
                  16:25PM
                </span>

                <p class="chat-self-box">Hi adam</p>
                <p class="chat-self-box">Apologies for the delayed response!</p>
                <p class="chat-self-box">
                  Feel free to ask anything related to Theme
                </p>
                <p class="chat-self-box">🙂</p>
              </div>

              <!--User chat box-->
              <div class="d-flex pe-4 mb-4 pe-lg-5 align-items-stretch">
                <div class="me-2">
                  <img
                    src="assets/media/avatars/03.jpg"
                    class="avatar sm rounded-circle"
                    alt=""
                  />
                </div>
                <div>
                  <p class="chat-user-box border">Great Theme!!</p>
                  <!--Typing animation-->
                  <div class="typing chat-user-box border">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                  </div>
                </div>
              </div>
            </div>

            <!--Chat footer-->
            <div
              class="
                offcanvas-footer
                mt-auto
                p-2
                border-top
                shadow
                position-relative
              "
            >
              <div class="position-relative p-4">
                <form>
                  <input
                    type="text"
                    placeholder="Type here..."
                    class="
                      form-control
                      ps-2
                      pe-5
                      border-0
                      shadow-none
                      rounded-0
                      position-absolute
                      w-100
                      h-100
                      start-0
                      top-0
                    "
                  />
                  <button
                    type="submit"
                    class="
                      btn
                      p-0
                      btn-primary
                      rounded-pill
                      d-flex
                      align-items-center
                      justify-content-center
                      size-35
                      position-absolute
                      end-0
                      top-50
                      translate-middle-y
                    "
                  >
                    <i data-feather="send" class="fe-1x"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <!--//Page Toolbar//-->
          <div class="toolbar pb-0 p-4">
            <div class="position-relative container-fluid px-0">
              <div class="row align-items-center position-relative">
                <div class="col-md-7 mb-4 mb-md-0">
                  <h3 class="mb-2 mb-0">Welcome back, Noah!</h3>
                </div>
                <div class="col-md-5">
                  <nav
                    aria-label="breadcrumb"
                    class="d-md-flex justify-content-md-end"
                  >
                    <ol class="breadcrumb mb-0">
                      <li class="breadcrumb-item">
                        <a href="#!" class="">Home</a>
                      </li>
                      <li class="breadcrumb-item">Dashboard</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <!--//Page Toolbar End//-->

          <!--//Page content//-->
          <div
            class="content pb-0 p-4 d-flex flex-column-fluid position-relative"
          >
            <div class="container-fluid px-0">
              <div class="row">
                <!--Sparkline charts-->
                <div class="col-12 col-lg-3 col-sm-6 mb-4">
                  <div class="card-body card">
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <div>
                        <span
                          class="
                            d-block
                            mb-2
                            text-muted
                            small
                            text-uppercase
                            fw-bold
                          "
                        >
                          Earnings
                        </span>
                        <h4 class="mb-0">$87458</h4>
                      </div>
                      <div class="flex-grow-1 text-end">
                        <i
                          data-feather="trending-up"
                          class="fe-1x text-success me-2"
                        ></i>
                        <span>2%</span>
                      </div>
                    </div>
                    <div id="spark-earnings"></div>
                  </div>
                </div>

                <div class="col-12 col-lg-3 col-sm-6 mb-4">
                  <div class="card-body card">
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <div>
                        <span
                          class="
                            d-block
                            mb-2
                            text-muted
                            small
                            text-uppercase
                            fw-bold
                          "
                        >
                          Expenses
                        </span>
                        <h4 class="mb-0">$12458</h4>
                      </div>
                      <div class="flex-grow-1 text-end">
                        <i
                          data-feather="trending-down"
                          class="fe-1x text-danger me-2"
                        ></i>
                        <span>-9%</span>
                      </div>
                    </div>
                    <div id="spark-expenses"></div>
                  </div>
                </div>
                <div class="col-12 col-lg-3 col-sm-6 mb-4">
                  <div class="card-body card">
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <div>
                        <span
                          class="
                            d-block
                            mb-2
                            text-muted
                            small
                            text-uppercase
                            fw-bold
                          "
                        >
                          Sales
                        </span>
                        <h4 class="mb-0">5421</h4>
                      </div>
                      <div class="flex-grow-1 text-end">
                        <i
                          data-feather="trending-up"
                          class="fe-1x text-success me-2"
                        ></i>
                        <span>5%</span>
                      </div>
                    </div>
                    <div id="spark-sales"></div>
                  </div>
                </div>
                <div class="col-12 col-lg-3 col-sm-6 mb-4">
                  <div class="card-body card">
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <div>
                        <span
                          class="
                            d-block
                            mb-2
                            text-muted
                            small
                            text-uppercase
                            fw-bold
                          "
                        >
                          Bounce Rate
                        </span>
                        <h4 class="mb-0">34%</h4>
                      </div>
                    </div>
                    <div id="spark-bounce"></div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-12 mb-4">
                  <div class="position-relative card h-100">
                    <div
                      class="
                        card-header
                        shadow-sm
                        d-flex
                        justify-content-between
                        align-items-end
                      "
                    >
                      <div>
                        <h5 class="mb-1">Overview</h5>
                      </div>
                    </div>
                    <div class="card-body ps-0">
                      <div id="chart-line"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-6 mb-4">
                  <div class="position-relative h-100 card">
                    <div
                      class="
                        card-header
                        shadow-sm
                        d-flex
                        justify-content-between
                        align-items-center
                      "
                    >
                      <h5 class="mb-0">Recent Transactions</h5>
                      <!--Dropdown-->
                      <div class="dropdown">
                        <a
                          href="#"
                          data-bs-toggle="dropdown"
                          class="d-flex align-items-center text-muted"
                        >
                          <i
                            data-feather="filter"
                            class="fe-1x align-middle"
                          ></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end mt-1">
                          <a href="#!.html" class="dropdown-item">
                            <i
                              data-feather="arrow-down"
                              class="fe-1x align-middle text-success"
                            ></i>
                            Received
                          </a>
                          <a href="#!.html" class="dropdown-item">
                            <i
                              data-feather="arrow-up"
                              class="fe-1x align-middle text-danger"
                            ></i>
                            Sent
                          </a>
                          <a href="#!.html" class="dropdown-item">
                            <i
                              data-feather="clock"
                              class="fe-1x align-middle text-muted"
                            ></i>
                            History
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item pt-0">
                          <div class="d-flex">
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-4 text-danger">
                                <i class="fe-1x" data-feather="arrow-up"></i>
                              </div>
                              <div class="d-flex flex-column">
                                <h6 class="mb-1 text-dark text-sm">Netflix</h6>
                                <small class="text-muted">
                                  24 May 2021, 3:40pm
                                </small>
                              </div>
                            </div>
                            <div
                              class="
                                d-flex
                                align-items-center
                                text-danger text-gradient text-sm
                                font-weight-bold
                                ms-auto
                              "
                            >
                              - $49
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="d-flex">
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-4 text-success">
                                <i class="fe-1x" data-feather="arrow-down"></i>
                              </div>
                              <div class="d-flex flex-column">
                                <h6 class="mb-1 text-dark text-sm">Paypal</h6>
                                <small class="text-muted">
                                  16 Aug 2021, 12:02am
                                </small>
                              </div>
                            </div>
                            <div
                              class="
                                d-flex
                                align-items-center
                                text-success
                                ms-auto
                              "
                            >
                              + $ 12,474
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="d-flex">
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-4 text-danger">
                                <i class="fe-1x" data-feather="arrow-up"></i>
                              </div>
                              <div class="d-flex flex-column">
                                <h6 class="mb-1 text-dark text-sm">
                                  Visa Card ending **62
                                </h6>
                                <small class="text-muted">
                                  24 May 2021, 3:40pm
                                </small>
                              </div>
                            </div>
                            <div
                              class="
                                d-flex
                                align-items-center
                                text-danger
                                ms-auto
                              "
                            >
                              - $ 199
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item pb-0">
                          <div class="d-flex">
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-4 text-success">
                                <i class="fe-1x" data-feather="arrow-down"></i>
                              </div>
                              <div class="d-flex flex-column">
                                <h6 class="mb-1 text-dark text-sm">
                                  Adam Voges
                                </h6>
                                <small class="text-muted">
                                  12 May 2021, 3:40pm
                                </small>
                              </div>
                            </div>
                            <div
                              class="
                                d-flex
                                align-items-center
                                text-success
                                ms-auto
                              "
                            >
                              + $ 847
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="card h-100">
                    <!--Card title-->
                    <div
                      class="
                        card-header
                        shadow-sm
                        d-flex
                        justify-content-between
                      "
                    >
                      <h5 class="mb-0 me-3">Users</h5>
                      <a href="#!.html">View All</a>
                    </div>

                    <div class="card-body">
                      <!--List-->
                      <ul class="list-group list-group-flush">
                        <!--List group item-->
                        <li class="list-group-item pt-0">
                          <div class="row align-items-center">
                            <div class="col-auto">
                              <a href="#!" class="">
                                <div class="avatar avatar-status status-online">
                                  <img
                                    src="assets/media/avatars/04.jpg"
                                    class="img-fluid rounded-circle w-auto"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                            <div class="col">
                              <h6 class="mb-0">
                                <a href="#!.html">Jason Holder</a>
                              </h6>
                              <small class="text-muted">
                                jholder@gmail.com
                              </small>
                            </div>
                            <div class="col-auto">
                              <a
                                href="#!.html"
                                class="
                                  btn btn-sm btn-outline-light
                                  text-muted
                                  border
                                "
                              >
                                Add
                              </a>
                            </div>
                          </div>
                        </li>
                        <!--List group item-->
                        <li class="list-group-item">
                          <div class="row align-items-center">
                            <div class="col-auto">
                              <a href="#!" class="">
                                <div class="avatar avatar-status status-online">
                                  <img
                                    src="assets/media/avatars/06.jpg"
                                    class="img-fluid rounded-circle w-auto"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                            <div class="col">
                              <h6 class="mb-0">
                                <a href="#!.html">Emily Doe</a>
                              </h6>
                              <small class="text-muted">edoe@outlook.com</small>
                            </div>
                            <div class="col-auto">
                              <a
                                href="#!.html"
                                class="
                                  btn btn-sm btn-outline-light
                                  text-muted
                                  border
                                "
                              >
                                Add
                              </a>
                            </div>
                          </div>
                        </li>
                        <!--List group item-->
                        <li class="list-group-item">
                          <div class="row align-items-center">
                            <div class="col-auto">
                              <a href="#!" class="">
                                <div class="avatar avatar-status status-online">
                                  <img
                                    src="assets/media/avatars/07.jpg"
                                    class="img-fluid rounded-circle w-auto"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                            <div class="col">
                              <h6 class="mb-0">
                                <a href="#!.html">Danzel Walsh</a>
                              </h6>
                              <small class="text-muted">danzel@yahoo.com</small>
                            </div>
                            <div class="col-auto">
                              <a
                                href="#!.html"
                                class="
                                  btn btn-sm btn-outline-light
                                  text-muted
                                  border
                                "
                              >
                                Add
                              </a>
                            </div>
                          </div>
                        </li>
                        <!--List group item-->
                        <li class="list-group-item pb-0">
                          <div class="row align-items-center">
                            <div class="col-auto">
                              <a href="#!" class="">
                                <div class="avatar avatar-status status-online">
                                  <img
                                    src="assets/media/avatars/08.jpg"
                                    class="img-fluid rounded-circle w-auto"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                            <div class="col">
                              <h6 class="mb-0">
                                <a href="#!.html">Vladimir Ballak</a>
                              </h6>
                              <small class="text-muted">
                                vladimir@ballak.com
                              </small>
                            </div>
                            <div class="col-auto">
                              <a
                                href="#!.html"
                                class="
                                  btn btn-sm btn-outline-light
                                  text-muted
                                  border
                                "
                              >
                                Add
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--//Page content End//-->

          <!--//Page-footer//-->
          <!-- <footer class="pb-4">
            <div class="container-fluid px-4">
              <span class="d-block lh-sm small text-muted text-end">
                &copy;
                <script>
                  document.write(new Date().getFullYear())
                </script>
                . Copyright
              </span>
            </div>
          </footer> -->
          <!--/.Page Footer End-->
        </main>
        <!--///////////Page content wrapper End///////////////-->
      </div>
    </div>

    <!--////////////Theme Core scripts Start/////////////////-->

    <script type="text/javascript">
      feather.replace()
    </script>

    <!--////////////Theme Core scripts End/////////////////-->

    <!--Charts-->

    <!--Init Chart-->
    <script type="text/javascript">
      var cPrimary = '#5252F9'
      var cWarning = '#ffb016'
      var cSecondary = '#ff4d62'
      var cSuccess = '#4BC98D'
      var cMuted = '#a5a5bc'
      var cBodycolor = '#31314d'
      var cLight = '#f3f6fb'
      var cGray = '#e3e7ef'
      var cFont = 'inherit'
      //------------------------Line Chart------------
      new ApexCharts(document.querySelector('#chart-line'), {
        series: [
          {
            name: 'Sales',
            data: [140, 220, 180, 110, 90, 70, 40],
          },
          {
            name: 'Earnings',
            data: [1150, 1360, 1110, 870, 680, 540, 290],
          },
        ],
        colors: [cWarning, cPrimary],
        chart: {
          fontFamily: cFont,
          toolbar: {
            show: false,
          },
          height: 350,
          type: 'line',
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [2, 3],
          curve: 'smooth',
          dashArray: [0, 6],
        },
        legend: {
          position: 'top',
          tooltipHoverFormatter: function (val, opts) {
            return (
              val +
              ' - ' +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              ''
            )
          },
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          categories: ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'],
          labels: {
            style: {
              colors: cMuted,
              fontFamily: cFont,
            },
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: cMuted,
              fontFamily: cFont,
            },
          },
        },
        tooltip: {
          y: [
            {
              formatter: function (y) {
                if (typeof y !== 'undefined') {
                  return y.toFixed(0) + ' (Units)'
                }
                return y
              },
            },
            {
              formatter: function (y) {
                if (typeof y !== 'undefined') {
                  return ' $' + y.toFixed(0)
                }
                return y
              },
            },
          ],
        },
        grid: {
          borderColor: cLight,
          strokeDashArray: 6,
          padding: {
            top: 20,
            right: 20,
            bottom: 0,
            left: 20,
          },
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
      }).render()

      //Spark1
      new ApexCharts(document.querySelector('#spark-earnings'), {
        chart: {
          type: 'line',
          height: 65,
          fontFamily: cFont,
          sparkline: {
            enabled: true,
          },
        },
        series: [
          {
            name: ['Earnings'],
            data: [3545, 5214, 4125, 3959, 5021, 3844, 4712],
          },
        ],
        stroke: {
          width: 2,
          curve: 'smooth',
        },
        markers: {
          size: 0,
        },
        grid: {
          padding: {
            top: 10,
            bottom: 0,
            right: 5,
            left: 5,
          },
        },
        colors: [cPrimary],
        tooltip: {
          x: {
            show: false,
          },
          y: [
            {
              formatter: function (y) {
                return ' $' + y
              },
            },
          ],
        },
      }).render()
      //Spark2
      new ApexCharts(document.querySelector('#spark-sales'), {
        chart: {
          type: 'line',
          height: 65,
          fontFamily: cFont,
          sparkline: {
            enabled: true,
          },
        },
        series: [
          {
            data: [59, 25, 44, 12, 25, 16, 41],
          },
        ],
        stroke: {
          width: 2,
          curve: 'smooth',
        },
        markers: {
          size: 0,
        },
        grid: {
          padding: {
            top: 10,
            bottom: 0,
            right: 5,
            left: 5,
          },
        },
        colors: [cSuccess],
        tooltip: {
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function formatter(val) {
                return ''
              },
            },
          },
        },
      }).render()
      //Spark3
      new ApexCharts(document.querySelector('#spark-expenses'), {
        chart: {
          type: 'line',
          height: 65,
          fontFamily: cFont,
          sparkline: {
            enabled: true,
          },
        },
        series: [
          {
            name: ['Expenses'],
            data: [1259, 925, 744, 1012, 1325, 916, 741],
          },
        ],
        stroke: {
          width: 2,
          curve: 'smooth',
        },
        markers: {
          size: 0,
        },
        grid: {
          padding: {
            top: 10,
            bottom: 0,
            right: 5,
            left: 5,
          },
        },
        colors: [cWarning],
        tooltip: {
          x: {
            show: false,
          },
          y: [
            {
              formatter: function (y) {
                return ' $' + y
              },
            },
          ],
        },
      }).render()
      //Spark4
      new ApexCharts(document.querySelector('#spark-bounce'), {
        chart: {
          type: 'line',
          height: 65,
          fontFamily: cFont,
          sparkline: {
            enabled: true,
          },
        },
        series: [
          {
            name: ['Bounce'],
            data: [5, 4, 7, 3, 6, 9, 8],
          },
        ],
        stroke: {
          width: 2,
          curve: 'smooth',
        },
        markers: {
          size: 0,
        },
        grid: {
          padding: {
            top: 10,
            bottom: 0,
            right: 5,
            left: 5,
          },
        },
        colors: [cSecondary],
        tooltip: {
          x: {
            show: false,
          },
          y: [
            {
              formatter: function (y) {
                return y + '%'
              },
            },
          ],
        },
      }).render()
    </script>
  </body>
</template>
<script>
export default {}
</script>
