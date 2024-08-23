import React from "react";

function NavigationMenu() {
  const menu = [
    {
      menuName: "Lpg Parts",
    },
  ];
  return (
    <>
      <div
        className="px-1 py-2 mb-1 vw-100 text-white"
        style={{ backgroundColor: "#12A04E" }}
      >
        <div className="container">
          <ul class="nav nav-pills">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavigationMenu;
