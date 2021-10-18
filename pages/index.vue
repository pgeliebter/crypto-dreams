<template>
  <div class="layout-horizontal bg-dark">
    <!--////////////////// PreLoader Start//////////////////////-->
    <div class="loader">
      <!--Placeholder animated layout for preloader-->
      <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
          <div class="page-content ps-0 ms-0 d-flex flex-column flex-row-fluid">
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
          </div>
        </div>
      </div>
    </div>
    <!--////////////////// /.PreLoader END//////////////////////-->

    <!--App Start-->
    <div class="d-flex flex-column flex-root">
      <!--Page-->

      <!--Header horizontal start-->
      <header
        class="
          navbar
          py-lg-0
          navbar-expand-lg navbar-dark
          bg-dark
          position-fixed
          start-0
          top-0
          w-100
          z-index-fixed
          shadow-sm
        "
      >
        <div class="container">
          <a class="navbar-brand fw-bolder text-white fs-3" href="index.html">
            Assan
          </a>
          <div class="d-flex order-lg-last">
            <div class="order-lg-last ms-auto">
              <ul
                class="
                  navbar-nav navbar-icon
                  flex-row
                  ms-auto
                  d-flex
                  align-items-center
                "
              >
                <li class="nav-item me-2 py-lg-3 d-flex align-items-center">
                  <a href="#!" class="btn btn-primary rounded-pill btn-sm">
                    <i data-feather="plus" class="fe-1x me-1"></i>
                    Create
                  </a>
                </li>
                <li class="nav-item dropdown py-lg-3 me-2">
                  <a
                    href="#!"
                    class="
                      nav-link
                      position-relative
                      p-0
                      size-35
                      d-flex
                      align-items-center
                      justify-content-center
                      rounded-circle
                    "
                  >
                    <i data-feather="help-circle" class="fe-2x"></i>
                  </a>
                </li>
                <li class="nav-item dropdown py-lg-3 me-3">
                  <a
                    href="#"
                    class="
                      nav-link
                      p-0
                      position-relative
                      size-35
                      d-flex
                      align-items-center
                      justify-content-center
                      rounded-circle
                    "
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    <i data-feather="activity" class="fe-2x"></i>
                    <span
                      class="
                        badge
                        p-0
                        size-5
                        me-2
                        mt-1
                        rounded-circle
                        d-flex
                        align-items-center
                        justify-content-center
                        position-absolute
                        end-0
                        top-0
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
                    <div class="height-290" data-simplebar="init">
                      <div class="simplebar-wrapper" style="margin: 0px">
                        <div class="simplebar-height-auto-observer-wrapper">
                          <div class="simplebar-height-auto-observer"></div>
                        </div>
                        <div class="simplebar-mask">
                          <div
                            class="simplebar-offset"
                            style="right: 0px; bottom: 0px"
                          >
                            <div
                              class="simplebar-content-wrapper"
                              style="height: 100%; overflow: hidden scroll"
                            >
                              <div
                                class="simplebar-content"
                                style="padding: 0px"
                              >
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
                                        <div
                                          class="
                                            avatar avatar-status
                                            status-online
                                          "
                                        >
                                          <img
                                            src="assets/media/avatars/01.jpg"
                                            class="
                                              img-fluid
                                              rounded-circle
                                              w-auto
                                            "
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
                                        <small class="text-muted">
                                          Just now
                                        </small>
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
                                        <div
                                          class="
                                            avatar avatar-status
                                            status-offline
                                          "
                                        >
                                          <img
                                            src="assets/media/avatars/06.jpg"
                                            class="
                                              img-fluid
                                              rounded-circle
                                              w-auto
                                            "
                                            alt=""
                                          />
                                        </div>
                                      </div>

                                      <div class="flex-grow-1 flex-wrap pe-3">
                                        <span class="mb-0 d-block">
                                          <strong>Vivianna Kiser</strong>
                                          just posted
                                          <span>
                                            "Lorem ipsum is placeholder text
                                            used in the graphic, print, and
                                            industries. "
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
                                            data-feather="lock"
                                            class="fe-3x"
                                          ></i>
                                        </span>
                                      </span>

                                      <div class="flex-grow-1 flex-wrap pe-3">
                                        <span class="mb-0 d-block">
                                          <strong>Updated</strong>
                                          Your account password updated
                                          succuessfully
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
                                            class="fe-3x"
                                          ></i>
                                        </span>
                                      </span>

                                      <div class="flex-grow-1 flex-wrap pe-3">
                                        <span class="mb-0 d-block">
                                          <strong>Pro discount</strong>
                                          Upgrade to pro plan with 30% discount,
                                          Apply coupon
                                          <span class="badge bg-primary">
                                            PRO30
                                          </span>
                                        </span>
                                        <small class="text-muted">2h Ago</small>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="simplebar-placeholder"
                          style="width: auto; height: 434px"
                        ></div>
                      </div>
                      <div
                        class="simplebar-track simplebar-horizontal"
                        style="visibility: hidden"
                      >
                        <div
                          class="simplebar-scrollbar"
                          style="width: 0px; display: none"
                        ></div>
                      </div>
                      <div
                        class="simplebar-track simplebar-vertical"
                        style="visibility: visible"
                      >
                        <div
                          class="simplebar-scrollbar"
                          style="
                            height: 193px;
                            transform: translate3d(0px, 0px, 0px);
                            display: block;
                          "
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown py-lg-3">
                  <a
                    href="#"
                    class="
                      nav-link
                      dropdown-toggle
                      rounded-pill
                      p-1
                      lh-1
                      pe-1
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
                      <div class="avatar-status status-online avatar sm">
                        <img
                          src="assets/media/avatars/01.jpg"
                          class="rounded-circle img-fluid"
                          alt=""
                        />
                      </div>
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
              </ul>
            </div>

            <button
              class="navbar-toggler border-0 shadow-none ms-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <!--Navbar collapse items-->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto">
              <li class="nav-item py-3 dropdown">
                <form class="position-relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    class="
                      form-control
                      w-100
                      rounded-pill
                      shadow-none
                      border-0
                      bg-secondary
                      text-white
                      px-4
                    "
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  />
                  <div class="dropdown-menu dropdown-menu-sm mt-2 border-0 p-3">
                    <div class="dropdown-header ps-0">
                      Top Searches
                      <i
                        data-feather="trending-up"
                        class="fe-2x ms-1 opacity-50"
                      ></i>
                    </div>
                    <div class="list-group list-group-flush">
                      <a href="#!" class="list-group-item d-flex">
                        <img
                          src="assets/media/brand-logos/github.svg"
                          class="height-20 w-auto me-3"
                          alt=""
                        />
                        <span>Github repository</span>
                      </a>
                      <a href="#!" class="list-group-item d-flex">
                        <img
                          src="assets/media/brand-logos/jirasoftware.svg"
                          class="height-20 w-auto me-3"
                          alt=""
                        />
                        <span>Jira pending issues</span>
                      </a>
                      <a href="#!" class="list-group-item d-flex">
                        <img
                          src="assets/media/brand-logos/prosperops.svg"
                          class="height-20 w-auto me-3"
                          alt=""
                        />
                        <span>Prosperops development</span>
                      </a>
                    </div>
                  </div>
                </form>
              </li>
            </ul>
            <ul class="navbar-nav me-lg-5">
              <li class="nav-item dropdown py-lg-3 me-lg-2">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dashboard
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-dark mt-0"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="index.html">E-commerce</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="index-analytics.html">
                      Analytics
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item py-lg-3 me-lg-2">
                <a class="nav-link" href="#">Inbox</a>
              </li>
              <li class="nav-item py-lg-3 me-lg-2">
                <a class="nav-link" href="#">Messages</a>
              </li>
              <li class="nav-item py-lg-3">
                <a class="nav-link" href="#">Orders</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div class="page d-flex flex-row flex-column-fluid">
        <!--///////////Page content wrapper///////////////-->
        <main class="page-content ps-0 ms-0 d-flex flex-column flex-row-fluid">
          <!--//Page Toolbar//-->
          <div
            class="toolbar pb-5 pt-10 border-bottom border-secondary text-white"
          >
            <div class="position-relative container pt-5">
              <div class="row align-items-center position-relative">
                <div class="col-sm-7 mb-3 mb-md-0">
                  <h3 class="mb-2">Welcome back, Noah!</h3>

                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0">
                      <li class="breadcrumb-item">
                        <a href="#!" class="">Home</a>
                      </li>
                      <li class="breadcrumb-item">Dashboard</li>
                    </ol>
                  </nav>
                </div>
                <div class="col-sm-5 col-lg-4 ms-auto text-sm-end">
                  <div class="btn-group">
                    <div
                      class="
                        px-3
                        py-2
                        border
                        rounded-start
                        border-secondary
                        text-light
                      "
                    >
                      Last 7 Days
                    </div>
                    <button
                      type="button"
                      class="
                        btn btn-secondary
                        text-muted
                        dropdown-toggle-split
                        rounded-end
                      "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i data-feather="more-vertical" class="fe-1x"></i>
                    </button>
                    <div
                      class="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                    >
                      <a href="#!" class="dropdown-item active">Last 7 Days</a>
                      <a href="#!" class="dropdown-item">Last Month</a>
                      <a href="#!" class="dropdown-item">Last 6 Months</a>
                      <a href="#!" class="dropdown-item">Last Year</a>
                      <a href="#!" class="dropdown-item">overall</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--//Page Toolbar End//-->

          <!--//Page content//-->
          <div
            class="content ps-0 pt-4 d-flex flex-column-fluid position-relative"
          >
            <div class="container">
              <div class="row">
                <!--Sparkline charts-->
                <div class="col-12 col-lg-3 col-sm-6 mb-4">
                  <div class="card-body card bg-secondary border-0">
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
                        <h4 class="mb-0 text-white">$87458</h4>
                      </div>
                      <div class="flex-grow-1 text-end">
                        <i
                          data-feather="trending-up"
                          class="fe-1x text-success me-2"
                        ></i>
                        <span class="text-white">2%</span>
                      </div>
                    </div>
                    <div id="spark-earnings"></div>
                  </div>
                </div>

                <div class="col-12 col-lg-3 col-sm-6 mb-4">
                  <div class="card-body card bg-secondary border-0">
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
                        <h4 class="mb-0 text-white">$12458</h4>
                      </div>
                      <div class="flex-grow-1 text-end">
                        <i
                          data-feather="trending-down"
                          class="fe-1x text-danger me-2"
                        ></i>
                        <span class="text-white">-9%</span>
                      </div>
                    </div>
                    <div id="spark-expenses"></div>
                  </div>
                </div>
                <div class="col-12 col-lg-3 col-sm-6 mb-4">
                  <div class="card-body card bg-secondary border-0">
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
                        <h4 class="mb-0 text-white">5421</h4>
                      </div>
                      <div class="flex-grow-1 text-end">
                        <i
                          data-feather="trending-up"
                          class="fe-1x text-success me-2"
                        ></i>
                        <span class="text-white">5%</span>
                      </div>
                    </div>
                    <div id="spark-sales"></div>
                  </div>
                </div>
                <div class="col-12 col-lg-3 col-sm-6 mb-4">
                  <div class="card-body card bg-secondary border-0">
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
                            text-muted
                          "
                        >
                          Bounce Rate
                        </span>
                        <h4 class="mb-0 text-white">34%</h4>
                      </div>
                    </div>
                    <div id="spark-bounce"></div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-7 mb-4">
                  <!--Card-->
                  <div class="card bg-transparent border-secondary h-100">
                    <!--Card header-->
                    <div
                      class="
                        d-flex
                        card-header
                        bg-secondary
                        border-secondary
                        justify-content-between
                        align-items-center
                      "
                    >
                      <h6 class="mb-0 pe-3 text-white">
                        Bid - Ask spreads for
                        {{ exchangesSpreads.baseSymbol }} -
                        {{ exchangesSpreads.quoteSymbol }}
                      </h6>
                      <!--Dropdown-->
                      <div class="dropdown">
                        <a
                          href="#"
                          data-bs-toggle="dropdown"
                          class="text-white"
                        >
                          <i
                            data-feather="more-vertical"
                            class="fe-1x align-middle"
                          ></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end mt-1">
                          <a href="#!.html" class="dropdown-item">
                            <i
                              data-feather="mail"
                              class="fe-1x me-2 opacity-50"
                            ></i>
                            Email report
                          </a>
                          <a href="#!.html" class="dropdown-item">
                            <i
                              data-feather="download"
                              class="fe-1x me-2 opacity-50"
                            ></i>
                            Download report
                          </a>
                        </div>
                      </div>
                    </div>
                    <!--Apex chart for Overview-->
                    <div class="card-body px-0 pb-0">
                      <ApexBarChart :data-props="exchangesSpreads" />
                    </div>
                  </div>
                </div>
                <div class="col-md-5 mb-4">
                  <div
                    class="
                      card
                      h-100
                      bg-transparent
                      border-secondary
                      overflow-hidden
                    "
                  >
                    <div
                      class="
                        d-flex
                        card-header
                        bg-secondary
                        border-secondary
                        justify-content-between
                        align-items-center
                      "
                    >
                      <h6 class="pe-3 mb-0 text-white">Recommendations</h6>
                      <!--Dropdown-->
                      <div class="dropdown">
                        <a
                          href="#"
                          data-bs-toggle="dropdown"
                          class="link-light"
                        >
                          <i
                            data-feather="more-vertical"
                            class="fe-1x align-middle"
                          ></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end mt-1">
                          <a href="#!.html" class="dropdown-item">
                            <i
                              data-feather="mail"
                              class="fe-1x me-2 opacity-50"
                            ></i>
                            Email report
                          </a>
                          <a href="#!.html" class="dropdown-item">
                            <i
                              data-feather="download"
                              class="fe-1x me-2 opacity-50"
                            ></i>
                            Download report
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      class="
                        card-body
                        d-flex
                        align-items-center
                        justify-content-around
                        flex-column
                        text-white
                      "
                    >
                      <h6>Buy on</h6>
                      <h3>{{ buyOn }}</h3>
                      <h6>Sell on</h6>
                      <h3>{{ sellOn }}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <!--row-->
              <div class="row">
                <div class="col-lg-7 col-xl-8 mb-4">
                  <!--card-->
                  <div
                    class="
                      card
                      bg-transparent
                      border-secondary
                      overflow-hidden
                      h-100
                    "
                  >
                    <div
                      class="
                        d-flex
                        bg-secondary
                        card-header
                        border-bottom-0
                        justify-content-between
                      "
                    >
                      <h6 class="me-3 text-white mb-0">Top Products</h6>
                      <a href="#!.html" class="link-light">View All</a>
                    </div>
                    <div class="table-responsive">
                      <table
                        class="
                          table table-sm table-nowrap table-dark table-card
                          mb-0
                        "
                        style="width: 100%"
                      >
                        <thead class="text-muted text-uppercase small">
                          <tr>
                            <th class="ps-3" style="width: 190px">Product</th>
                            <th>Change</th>
                            <th>Price</th>
                            <th>Sold</th>
                            <th>Sales</th>
                          </tr>
                        </thead>
                        <tbody class="align-middle">
                          <tr>
                            <td>
                              <div class="d-flex align-items-center">
                                <a href="#!.html">
                                  <img
                                    src="assets/media/products/6.png"
                                    class="
                                      avatar
                                      p-1
                                      border border-secondary
                                      rounded-2
                                      me-2
                                      align-middle
                                    "
                                    alt=""
                                  />
                                </a>
                                <p class="mb-0 text-truncate">
                                  <a href="#!.html" class="text-white">
                                    Apple white earbuds water proof
                                  </a>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex align-items-center">
                                <span class="me-2">8%</span>
                                <span class="small text-success">
                                  <i
                                    data-feather="trending-up"
                                    class="fe-1x align-middle ms-1"
                                  ></i>
                                </span>
                              </div>
                            </td>
                            <td>$69</td>
                            <td>9040</td>
                            <td>$623760</td>
                          </tr>
                          <tr>
                            <td class="">
                              <div class="d-flex align-items-center">
                                <a href="#!.html">
                                  <img
                                    src="assets/media/products/3.png"
                                    class="
                                      avatar
                                      p-1
                                      border border-secondary
                                      rounded-2
                                      me-2
                                      align-middle
                                    "
                                    alt=""
                                  />
                                </a>
                                <p class="mb-0 text-truncate">
                                  <a href="#!.html" class="text-white">
                                    Mini handbag for woomens
                                  </a>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex align-items-center">
                                <span class="me-2">6%</span>
                                <span class="small text-success">
                                  <i
                                    data-feather="trending-up"
                                    class="fe-1x align-middle ms-1"
                                  ></i>
                                </span>
                              </div>
                            </td>
                            <td>$59</td>
                            <td>8475</td>
                            <td>$500025</td>
                          </tr>
                          <tr>
                            <td class="">
                              <div class="d-flex align-items-center">
                                <a href="#!.html">
                                  <img
                                    src="assets/media/products/4.png"
                                    class="
                                      avatar
                                      p-1
                                      border border-secondary
                                      rounded-2
                                      me-2
                                      align-middle
                                    "
                                    alt=""
                                  />
                                </a>
                                <p class="mb-0 text-truncate">
                                  <a href="#!.html" class="text-white">
                                    Minimalist wireless headphone
                                  </a>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex align-items-center">
                                <span class="me-2">11%</span>
                                <span class="small text-success">
                                  <i
                                    data-feather="trending-up"
                                    class="fe-1x align-middle ms-1"
                                  ></i>
                                </span>
                              </div>
                            </td>
                            <td>$59</td>
                            <td>7321</td>
                            <td>$431939</td>
                          </tr>
                          <tr>
                            <td class="">
                              <div class="d-flex align-items-center">
                                <a href="#!.html">
                                  <img
                                    src="assets/media/products/5.png"
                                    class="
                                      avatar
                                      p-1
                                      border border-secondary
                                      rounded-2
                                      me-2
                                      align-middle
                                    "
                                    alt=""
                                  />
                                </a>
                                <p class="mb-0 text-truncate">
                                  <a href="#!.html" class="text-white">
                                    Google home mini
                                  </a>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex align-items-center">
                                <span class="me-2">-7%</span>
                                <span class="small text-danger">
                                  <i
                                    data-feather="trending-down"
                                    class="fe-1x align-middle ms-1"
                                  ></i>
                                </span>
                              </div>
                            </td>
                            <td>$39</td>
                            <td>5485</td>
                            <td>$212862</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 col-xl-4 mb-4">
                  <div class="card bg-transparent border-secondary h-100">
                    <div
                      class="
                        d-flex
                        card-header
                        border-secondary
                        bg-secondary
                        justify-content-between
                      "
                    >
                      <h6 class="me-3 mb-0 text-white">Top Countries</h6>
                      <a href="#!.html" class="link-light">View All</a>
                    </div>
                    <div class="card-body">
                      <ul class="list-group list-group-flush">
                        <!--List-item-->
                        <li
                          class="
                            list-group-item
                            pt-0
                            bg-transparent
                            border-secondary
                            text-white
                          "
                        >
                          <div class="row align-items-center">
                            <div class="col-auto">
                              <img
                                src="assets/media/flags/united-states.svg"
                                alt=""
                                class="width-20 rounded-circle h-auto"
                              />
                            </div>
                            <div class="col">United States</div>
                            <div class="col-auto">
                              <span>36%</span>
                            </div>
                          </div>
                        </li>
                        <!--List-item-->
                        <li
                          class="
                            list-group-item
                            bg-transparent
                            border-secondary
                            text-white
                          "
                        >
                          <div class="row align-items-center">
                            <div class="col-auto">
                              <img
                                src="assets/media/flags/united-kingdom.svg"
                                alt=""
                                class="width-20 rounded-circle h-auto"
                              />
                            </div>
                            <div class="col">United Kingdom</div>
                            <div class="col-auto">
                              <span>24%</span>
                            </div>
                          </div>
                        </li>
                        <!--List-item-->
                        <!--List-item-->
                        <li
                          class="
                            list-group-item
                            bg-transparent
                            border-secondary
                            text-white
                          "
                        >
                          <div class="row align-items-center">
                            <div class="col-auto">
                              <img
                                src="assets/media/flags/poland.svg"
                                alt=""
                                class="width-20 rounded-circle h-auto"
                              />
                            </div>
                            <div class="col">Poland</div>
                            <div class="col-auto">
                              <span>14%</span>
                            </div>
                          </div>
                        </li>
                        <!--List-item-->

                        <li
                          class="
                            list-group-item
                            bg-transparent
                            border-secondary
                            text-white
                          "
                        >
                          <div class="row align-items-center">
                            <div class="col-auto">
                              <img
                                src="assets/media/flags/india.svg"
                                alt=""
                                class="width-20 rounded-circle h-auto"
                              />
                            </div>
                            <div class="col">India</div>
                            <div class="col-auto">
                              <span>11%</span>
                            </div>
                          </div>
                        </li>
                        <!--List-item-->
                        <li
                          class="
                            list-group-item
                            bg-transparent
                            border-secondary
                            text-white
                          "
                        >
                          <div class="row align-items-center">
                            <div class="col-auto">
                              <img
                                src="assets/media/flags/france.svg"
                                alt=""
                                class="width-20 rounded-circle h-auto"
                              />
                            </div>
                            <div class="col">France</div>
                            <div class="col-auto">
                              <span>9%</span>
                            </div>
                          </div>
                        </li>
                        <li
                          class="
                            list-group-item
                            bg-transparent
                            border-secondary
                            text-white
                          "
                        >
                          <div class="row align-items-center">
                            <div class="col-auto">
                              <img
                                src="assets/media/flags/kenya.svg"
                                alt=""
                                class="width-20 rounded-circle h-auto"
                              />
                            </div>
                            <div class="col">Kenya</div>
                            <div class="col-auto">
                              <span>6%</span>
                            </div>
                          </div>
                        </li>
                        <!--List-item-->
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--//Page content End//-->

          <div class="container px-0 pb-2">
            <!--//Page-footer//-->
            <footer class="pb-4">
              <div class="container-fluid px-4"></div>
            </footer>
            <!--/.Page Footer End-->
          </div>
        </main>
        <!--///////////Page content wrapper End///////////////-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      spreadOne: {},
      spreadTwo: {},
      sayHi: 'hi',
      buyOn: '',
      sellOn: '',
      exchangesSpreads: {
        quoteSymbol: 'USD',
        baseSymbol: 'BTC',
        orderBooks: [
          {
            exchange: 'Bittrex',
            orderBook: {
              asks: [
                {
                  price: '61359.99400000',
                  quantity: '0.04888541',
                },
              ],
              bids: [
                {
                  price: '61348.58300000',
                  quantity: '0.12220842',
                },
              ],
            },
          },

          {
            exchange: 'CoinbasePro',
            orderBook: {
              asks: [
                {
                  price: '61365.92',
                  quantity: '0.06774309',
                },
              ],
              bids: [
                {
                  price: '61364.55',
                  quantity: '0.03049397',
                },
              ],
            },
          },

          {
            exchange: 'Gemini',
            orderBook: {
              asks: [
                {
                  price: '61368.89',
                  quantity: '0.00075102',
                },
              ],
              bids: [
                {
                  price: '61364.38',
                  quantity: '0.00007203',
                },
              ],
            },
          },

          {
            exchange: 'HitBtc',
            orderBook: {
              asks: [
                {
                  price: '61376.31',
                  quantity: '0.13019',
                },
              ],
              bids: [
                {
                  price: '61373.22',
                  quantity: '0.12653',
                },
              ],
            },
          },
          {
            exchange: 'BinanceUS',
            orderBook: {
              asks: [
                {
                  price: '61365.8600',
                  quantity: '0.95000000',
                },
              ],
              bids: [
                {
                  price: '61350.3000',
                  quantity: '0.19000000',
                },
              ],
            },
          },
          {
            exchange: 'BittrexInternational',
            orderBook: {
              asks: [
                {
                  price: '61359.99400000',
                  quantity: '0.04888541',
                },
              ],
              bids: [
                {
                  price: '61348.58300000',
                  quantity: '0.12220842',
                },
              ],
            },
          },
          {
            exchange: 'Bitfinex',
            orderBook: {
              asks: [
                {
                  price: '61330',
                  quantity: '0.01962297',
                },
              ],
              bids: [
                {
                  price: '61329',
                  quantity: '1.87925516',
                },
              ],
            },
          },
          {
            exchange: 'Bitstamp',
            orderBook: {
              asks: [
                {
                  price: '61371.37',
                  quantity: '0.23073992',
                },
              ],
              bids: [
                {
                  price: '61346.64',
                  quantity: '0.19000000',
                },
              ],
            },
          },
          {
            exchange: 'FtxUS',
            orderBook: {
              asks: [
                {
                  price: '61371',
                  quantity: '0.57',
                },
              ],
              bids: [
                {
                  price: '61370',
                  quantity: '0.57',
                },
              ],
            },
          },
          {
            exchange: 'Ftx',
            orderBook: {
              asks: [
                {
                  price: '61372',
                  quantity: '0.9912',
                },
              ],
              bids: [
                {
                  price: '61371',
                  quantity: '3.3157',
                },
              ],
            },
          },
          {
            exchange: 'GateIO',
            orderBook: {
              asks: [
                {
                  price: '61391.08',
                  quantity: '0.0308',
                },
              ],
              bids: [
                {
                  price: '61345.21',
                  quantity: '0.0308',
                },
              ],
            },
          },
        ],
      },
    }
  },
  mounted: function () {
    // hard coded feather for now but really needs to be loaded on all pages
    feather.replace()
  },
  methods: {},
}
</script>