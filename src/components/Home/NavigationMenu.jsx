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
        className="px-1 py-2 mb-1 w-100 text-white"
        style={{ backgroundColor: "#12A04E" }}
      >
        <div className="container">
          <ul className="nav nav-pills">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
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
