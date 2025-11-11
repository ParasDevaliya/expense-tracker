import DashboardFooter from "@/components/dashboard-components/footer";
import DashboardHeder from "@/components/dashboard-components/header";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <DashboardHeder />
        <div className="flex-grow relative p-4 pb-20 bg-base-300">
          <div className="flex  flex-col justify-between text-[var(--color-text)]">
            <div>
              <div className="flex justify-between">
                <h1 className="font-bold">Account</h1>
              </div>

              <div className="flex gap-3 mt-5 items-center">
                <div className="relative">
                  <img
                    src="./public/profile.svg"
                    className="w-20 h-20"
                    alt=""
                  />
                </div>
                <div>
                  <button className="btn btn-ghost btn-circle rounded-full absolute left-12">
                    <img
                      src="./public/camera.svg"
                      className="w-8 h-8 "
                      alt=""
                    />
                  </button>
                </div>
                <div className=" w-full flex justify-between items-center">
                  <div className="flex flex-col">
                    <h2>
                      <strong>John doe</strong>
                    </h2>
                    <small className="text-muted">johndoe@gmail.com</small>
                  </div>
                  <Link to="#">Edit</Link>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex gap-3 ml-5">
                  <svg
                    version="1.1"
                    id="svg2"
                    xmlns:dc="http://purl.org/dc/elements/1.1/"
                    xmlns:cc="http://creativecommons.org/ns#"
                    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                    xmlns:svg="http://www.w3.org/2000/svg"
                    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                    sodipodi:docname="qrcode.svg"
                    inkscape:version="0.48.4 r9939"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 1200 1200"
                    enable-background="new 0 0 1200 1200"
                    xml:space="preserve"
                    fill="#ffffff"
                    stroke="#ffffff"
                    width="25px"
                    height="25px"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        id="path3011"
                        d="M0,0v545.312h545.312V0H0z M654.688,0v545.312H1200V0H654.688z M108.594,108.594h328.125v328.125H108.594 V108.594z M763.281,108.594h328.125v328.125H763.281V108.594z M217.969,219.531v108.594h110.156V219.531H217.969z M871.875,219.531 v108.594h108.594V219.531H871.875z M0,654.688V1200h545.312V654.688H0z M654.688,654.688V1200h108.595V873.438h108.594v108.595H1200 V654.688h-108.594v108.595H980.469V654.688H654.688z M108.594,763.281h328.125v328.125H108.594V763.281z M217.969,871.875v110.156 h110.156V871.875H217.969z M871.875,1091.406V1200h108.594v-108.594H871.875z M1091.406,1091.406V1200H1200v-108.594H1091.406z"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p>Scan code</p>
                </div>
                <div className="flex gap-2 mt-3 ml-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                    width="30px"
                    height="30px"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M5.74806 13.7481L10.5858 18.5858C11.2525 19.2525 11.5858 19.5858 12 19.5858C12.4142 19.5858 12.7475 19.2525 13.4142 18.5858L18.2519 13.7481C19.1025 12.8975 19.5277 12.4723 19.6583 11.9193C19.7888 11.3664 19.5986 10.7958 19.2182 9.65473L18.9117 8.73509C18.4717 7.41505 18.2517 6.75503 17.7279 6.37752C17.2041 6 16.5084 6 15.117 6H8.88304C7.49159 6 6.79587 6 6.2721 6.37752C5.74832 6.75503 5.52832 7.41505 5.0883 8.73509L4.78176 9.65473C4.40139 10.7958 4.21121 11.3664 4.34175 11.9193C4.47228 12.4723 4.89754 12.8975 5.74806 13.7481Z"
                        fill="#ffffff"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p>Pro subciption</p>
                </div>
                <small>
                  <strong>Prefrences</strong>
                </small>
                <div className="flex gap-3 mt-3 ml-5">
                  <svg
                    viewBox="0 -2.5 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#ffffff"
                    stroke="#ffffff"
                    width="25px"
                    height="25px"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>email [#1573]</title>{" "}
                      <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-300.000000, -922.000000)"
                          fill="#ffffff"
                        >
                          {" "}
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            {" "}
                            <path
                              d="M262,764.291 L254,771.318 L246,764.281 L246,764 L262,764 L262,764.291 Z M246,775 L246,766.945 L254,773.98 L262,766.953 L262,775 L246,775 Z M244,777 L264,777 L264,762 L244,762 L244,777 Z"
                              id="email-[#1573]"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <p>Email settings</p>
                </div>
                <div className="flex gap-3 mt-3 ml-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                    width="25px"
                    height="25px"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p>Device and push notification settings</p>
                </div>
                <div className="flex gap-3 mt-3 ml-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                    width="25px"
                    height="25px"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p>Security</p>
                </div>
                <small>
                  <strong>Feedback</strong>
                </small>
                <div className="flex gap-3 mt-3 ml-5">
                  <svg
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                    fill="#000000"
                    width="25px"
                    height="25px"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>start-favorite</title>{" "}
                      <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                        sketch:type="MSPage"
                      >
                        {" "}
                        <g
                          id="Icon-Set-Filled"
                          sketch:type="MSLayerGroup"
                          transform="translate(-154.000000, -881.000000)"
                          fill="#ffffff"
                        >
                          {" "}
                          <path
                            d="M186,893.244 L174.962,891.56 L170,881 L165.038,891.56 L154,893.244 L161.985,901.42 L160.095,913 L170,907.53 L179.905,913 L178.015,901.42 L186,893.244"
                            id="start-favorite"
                            sketch:type="MSShapeGroup"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <p>Rate Expense tracker</p>
                </div>
                <div className="flex gap-3 mt-3 ml-5">
                  <svg
                    viewBox="0 0 512 512"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                    width="25px"
                    height="25px"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>support</title>{" "}
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="support"
                          fill="#ffffff"
                          transform="translate(42.666667, 42.666667)"
                        >
                          {" "}
                          <path d="M379.734355,174.506667 C373.121022,106.666667 333.014355,-2.13162821e-14 209.067688,-2.13162821e-14 C85.1210217,-2.13162821e-14 45.014355,106.666667 38.4010217,174.506667 C15.2012632,183.311569 -0.101643453,205.585799 0.000508304259,230.4 L0.000508304259,260.266667 C0.000508304259,293.256475 26.7445463,320 59.734355,320 C92.7241638,320 119.467688,293.256475 119.467688,260.266667 L119.467688,230.4 C119.360431,206.121456 104.619564,184.304973 82.134355,175.146667 C86.4010217,135.893333 107.307688,42.6666667 209.067688,42.6666667 C310.827688,42.6666667 331.521022,135.893333 335.787688,175.146667 C313.347976,184.324806 298.68156,206.155851 298.667688,230.4 L298.667688,260.266667 C298.760356,283.199651 311.928618,304.070103 332.587688,314.026667 C323.627688,330.88 300.801022,353.706667 244.694355,360.533333 C233.478863,343.50282 211.780225,336.789048 192.906491,344.509658 C174.032757,352.230268 163.260418,372.226826 167.196286,392.235189 C171.132153,412.243552 188.675885,426.666667 209.067688,426.666667 C225.181549,426.577424 239.870491,417.417465 247.041022,402.986667 C338.561022,392.533333 367.787688,345.386667 376.961022,317.653333 C401.778455,309.61433 418.468885,286.351502 418.134355,260.266667 L418.134355,230.4 C418.23702,205.585799 402.934114,183.311569 379.734355,174.506667 Z M76.8010217,260.266667 C76.8010217,269.692326 69.1600148,277.333333 59.734355,277.333333 C50.3086953,277.333333 42.6676884,269.692326 42.6676884,260.266667 L42.6676884,230.4 C42.6676884,224.302667 45.9205765,218.668499 51.2010216,215.619833 C56.4814667,212.571166 62.9872434,212.571166 68.2676885,215.619833 C73.5481336,218.668499 76.8010217,224.302667 76.8010217,230.4 L76.8010217,260.266667 Z M341.334355,230.4 C341.334355,220.97434 348.975362,213.333333 358.401022,213.333333 C367.826681,213.333333 375.467688,220.97434 375.467688,230.4 L375.467688,260.266667 C375.467688,269.692326 367.826681,277.333333 358.401022,277.333333 C348.975362,277.333333 341.334355,269.692326 341.334355,260.266667 L341.334355,230.4 Z">
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <p>Contact Support</p>
                </div>
                <hr className="my-5" />
                <button
                  className="btn btn-link text-white no-underline"
                  onClick={handleLogout}
                >
                  {" "}
                  <div className="flex gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25px"
                      height="25px"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.25 5.25L9 4.5H18L18.75 5.25V18.75L18 19.5H9L8.25 18.75V16.5H9.75V18H17.25V6H9.75V7.5H8.25V5.25Z"
                          fill="#ffffff"
                        ></path>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.06068 12.7499L14.25 12.7499L14.25 11.2499L7.06068 11.2499L8.78035 9.53027L7.71969 8.46961L4.18936 11.9999L7.71969 15.5303L8.78035 14.4696L7.06068 12.7499Z"
                          fill="#ffffff"
                        ></path>{" "}
                      </g>
                    </svg>
                    <p>Log out</p>
                  </div>
                </button>
              </div>
            </div>

            <div className="flex justify-end absolute bottom-21 right-3">
              <Link
                to="/addexpense"
                className="btn btn-primary mt-5 rounded-full"
              >
                + Add expense
              </Link>
            </div>
          </div>
        </div>{" "}
        {/* bottom padding prevents overlap */}
        <DashboardFooter />
      </div>
    </>
  );
}
