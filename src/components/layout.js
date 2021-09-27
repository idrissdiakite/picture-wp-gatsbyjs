import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useIntl, IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import logo from "../../content/assets/logo.png"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          description
          title
        }
      }
      allWpMediaItem(filter: { title: {}, id: { eq: "cG9zdDo2NzA5Mzg=" } }) {
        edges {
          node {
            title
            srcSet
            id
          }
        }
      }
    }
  `)

  const intl = useIntl()
  const languageName = {
    fr: "FR",
    en: "EN",
  }

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <section class="bg-primary">
        <header>
          <div class="container">
            <nav>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
              <ul class="headerLinks">
                <li>
                  <a href="https://www.picture-organic-clothing.com/collection/">
                    Collection
                  </a>
                </li>
                <li>
                  <a href="https://www.picture-organic-clothing.com/ride/">
                    Ride
                  </a>
                </li>
                <li>
                  <a href="https://www.picture-organic-clothing.com/protect/">
                    Protect
                  </a>
                </li>
                <li>
                  <a href="https://www.picture-organic-clothing.com/share/">
                    Share
                  </a>
                </li>
              </ul>
              <div class="menuIcons">
                <ul>
                  <li>
                    <a class="iconfont icon-search" href="/"></a>
                  </li>
                  <li>
                    <a class="iconfont icon-store" href="/"></a>
                  </li>
                  <li>
                    <a class="iconfont icon-user" href="/"></a>
                  </li>
                  <li>
                    <IntlContextConsumer>
                      {({ languages, language: currentLocale }) =>
                        languages.map(language => (
                          <a
                            key={language}
                            onClick={() => changeLocale(language)}
                            style={{
                              marginRight: 15,
                              cursor: `pointer`,
                              fontFamily: `Fira Sans`,
                              fontSize: `28px`,
                            }}
                          >
                            {languageName[language]}
                          </a>
                        ))
                      }
                    </IntlContextConsumer>
                  </li>
                </ul>
              </div>
            </nav>
            <hr />
          </div>
        </header>
        <main>{children}</main>
      </section>

      <footer>
        <div class="bg-primary">
          <section class="infos container">
            <div>
              <h3>{intl.formatMessage({ id: "payment" })}</h3>
              <p>{intl.formatMessage({ id: "paymentSub" })}</p>
            </div>

            <div>
              <h3>{intl.formatMessage({ id: "delivery" })}</h3>
              <p>{intl.formatMessage({ id: "deliverySub" })}</p>
            </div>

            <div>
              <h3>{intl.formatMessage({ id: "customer" })}</h3>
              <p>{intl.formatMessage({ id: "customerSub" })}</p>
            </div>
          </section>
        </div>

        <div class="bg-green">
          <section class="social container">
            <div>
              <h3>{intl.formatMessage({ id: "follow" })}</h3>
            </div>

            <div class="socialIcons">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/pictureorganiclothing/"
                    target="_blank"
                    rel="noreferrer"
                    class="svg facebook"
                  >
                    <svg
                      viewBox="0 0 10 18"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.6666667,11.25 L13.75,11.25 L14.5833333,7.91666667 L11.6666667,7.91666667 L11.6666667,6.25 C11.6666667,5.39166667 11.6666667,4.58333333 13.3333333,4.58333333 L14.5833333,4.58333333 L14.5833333,1.78333333 C14.3116667,1.7475 13.2858333,1.66666667 12.2025,1.66666667 C9.94,1.66666667 8.33333333,3.0475 8.33333333,5.58333333 L8.33333333,7.91666667 L5.83333333,7.91666667 L5.83333333,11.25 L8.33333333,11.25 L8.33333333,18.3333333 L11.6666667,18.3333333 L11.6666667,11.25 Z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/pictureorganicclothing/"
                    target="_blank"
                    rel="noreferrer"
                    class="svg instagram"
                  >
                    <svg
                      viewBox="0 0 10 18"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10,1.66666667 C12.2641667,1.66666667 12.5466667,1.675 13.435,1.71666667 C14.3225,1.75833333 14.9266667,1.8975 15.4583333,2.10416667 C16.0083333,2.31583333 16.4716667,2.6025 16.935,3.065 C17.3587447,3.48157997 17.686628,3.9854908 17.8958333,4.54166667 C18.1016667,5.0725 18.2416667,5.6775 18.2833333,6.565 C18.3225,7.45333333 18.3333333,7.73583333 18.3333333,10 C18.3333333,12.2641667 18.325,12.5466667 18.2833333,13.435 C18.2416667,14.3225 18.1016667,14.9266667 17.8958333,15.4583333 C17.6872305,16.0148138 17.3592672,16.5188475 16.935,16.935 C16.5183012,17.3585994 16.0144244,17.6864605 15.4583333,17.8958333 C14.9275,18.1016667 14.3225,18.2416667 13.435,18.2833333 C12.5466667,18.3225 12.2641667,18.3333333 10,18.3333333 C7.73583333,18.3333333 7.45333333,18.325 6.565,18.2833333 C5.6775,18.2416667 5.07333333,18.1016667 4.54166667,17.8958333 C3.98527181,17.6870611 3.48127268,17.3591204 3.065,16.935 C2.64117203,16.5184881 2.31327603,16.0145577 2.10416667,15.4583333 C1.8975,14.9275 1.75833333,14.3225 1.71666667,13.435 C1.6775,12.5466667 1.66666667,12.2641667 1.66666667,10 C1.66666667,7.73583333 1.675,7.45333333 1.71666667,6.565 C1.75833333,5.67666667 1.8975,5.07333333 2.10416667,4.54166667 C2.31269675,3.9851495 2.6406697,3.48110088 3.065,3.065 C3.48139248,2.64102602 3.98535715,2.3131077 4.54166667,2.10416667 C5.07333333,1.8975 5.67666667,1.75833333 6.565,1.71666667 C7.45333333,1.6775 7.73583333,1.66666667 10,1.66666667 Z M10,5.83333333 C7.69881354,5.83333333 5.83333333,7.69881354 5.83333333,10 C5.83333333,12.3011865 7.69881354,14.1666667 10,14.1666667 C12.3011865,14.1666667 14.1666667,12.3011865 14.1666667,10 C14.1666667,7.69881354 12.3011865,5.83333333 10,5.83333333 L10,5.83333333 Z M15.4166667,5.625 C15.4166667,5.04970339 14.9502966,4.58333333 14.375,4.58333333 C13.7997034,4.58333333 13.3333333,5.04970339 13.3333333,5.625 C13.3333333,6.20029661 13.7997034,6.66666667 14.375,6.66666667 C14.9502966,6.66666667 15.4166667,6.20029661 15.4166667,5.625 Z M10,7.5 C11.3807119,7.5 12.5,8.61928813 12.5,10 C12.5,11.3807119 11.3807119,12.5 10,12.5 C8.61928813,12.5 7.5,11.3807119 7.5,10 C7.5,8.61928813 8.61928813,7.5 10,7.5 Z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/picture-organic-clothing/"
                    target="_blank"
                    rel="noreferrer"
                    class="linkedin svg"
                  >
                    <svg
                      viewBox="0 0 10 18"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.78333355,4.16666667 C5.7828731,5.08714125 5.03630792,5.83296024 4.11583333,5.83250021 C3.19535875,5.83203976 2.44953976,5.08547458 2.44999979,4.165 C2.45046024,3.24452542 3.19702542,2.49870643 4.1175,2.49916645 C5.03797458,2.4996269 5.78379357,3.24619208 5.78333355,4.16666667 L5.78333355,4.16666667 Z M5.83333333,7.06666667 L2.5,7.06666667 L2.5,17.5 L5.83333333,17.5 L5.83333333,7.06666667 Z M11.1,7.06666667 L7.78333333,7.06666667 L7.78333333,17.5 L11.0666667,17.5 L11.0666667,12.025 C11.0666667,8.975 15.0416667,8.69166667 15.0416667,12.025 L15.0416667,17.5 L18.3333333,17.5 L18.3333333,10.8916667 C18.3333333,5.75 12.45,5.94166667 11.0666667,8.46666667 L11.1,7.06666667 Z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCgbuI1Xv-HS3UKKmkeKM3qw"
                    target="_blank"
                    rel="noreferrer"
                    class="youtube svg"
                  >
                    <svg
                      viewBox="0 0 10 18"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.9525,5.415 C18.3333333,6.9 18.3333333,10 18.3333333,10 C18.3333333,10 18.3333333,13.1 17.9525,14.585 C17.7408333,15.4058333 17.1216667,16.0516667 16.3375,16.27 C14.9133333,16.6666667 10,16.6666667 10,16.6666667 C10,16.6666667 5.08916667,16.6666667 3.6625,16.27 C2.875,16.0483333 2.25666667,15.4033333 2.0475,14.585 C1.66666667,13.1 1.66666667,10 1.66666667,10 C1.66666667,10 1.66666667,6.9 2.0475,5.415 C2.25916667,4.59416667 2.87833333,3.94833333 3.6625,3.73 C5.08916667,3.33333333 10,3.33333333 10,3.33333333 C10,3.33333333 14.9133333,3.33333333 16.3375,3.73 C17.125,3.95166667 17.7433333,4.59666667 17.9525,5.415 Z M8.33333333,12.9166667 L13.3333333,10 L8.33333333,7.08333333 L8.33333333,12.9166667 Z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://vimeo.com/pictureorganicclothing"
                    target="_blank"
                    rel="noreferrer"
                    class="vimeo svg"
                  >
                    <svg
                      width="30px"
                      height="19px"
                      viewBox="0 0 10 18"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.9775,6.9175 C0.743333333,6.57333333 0.7675,6.57333333 1.25083333,6.14916667 C2.2775,5.2475 3.24583333,4.26083333 4.36416667,3.4725 C5.37666667,2.7625 6.71916667,2.30416667 7.63666667,3.43333333 C8.48166667,4.47416667 8.50166667,6.05166667 8.71583333,7.30833333 C8.93,8.61166667 9.135,9.945 9.59166667,11.1916667 C9.71833333,11.5425 9.96083333,12.2058333 10.3983333,12.2616667 C10.9633333,12.3391667 11.5383333,11.3483333 11.8008333,10.9783333 C12.4816667,9.995 13.405,8.67083333 13.2883333,7.40666667 C13.1733333,6.06333333 11.7233333,6.31583333 10.8166667,6.63666667 C10.9625,5.12916667 12.365,3.43416667 13.7166667,2.86166667 C15.15,2.26666667 17.28,2.27666667 18,3.8925 C18.7691667,5.64416667 18.0775,7.67833333 17.24,9.26583333 C16.3258333,10.9891667 15.1491667,12.5841667 13.8916667,14.0741667 C12.7825,15.3975 11.47,16.8491667 9.81666667,17.4816667 C7.9275,18.2016667 6.80833333,16.7983333 6.165,15.1733333 C5.4625,13.4041667 5.11333333,11.4183333 4.60666667,9.57583333 C4.39333333,8.7975 4.14,7.91166667 3.63416667,7.26916667 C2.97416667,6.44 2.22416667,7.21916667 1.5725,7.66666667 C1.34833333,7.44416667 1.16333333,7.16083333 0.9775,6.9175 Z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>{intl.formatMessage({ id: "subscribe" })}</h3>
            </div>
          </section>

          <hr class="container" />

          <section class="links container">
            <div class="logo">
              <span class="logo-main">
                <img src={logo} alt="logo" />
              </span>
              <span class="logo-cert">
                <svg></svg>
              </span>
            </div>

            <div>
              <ul>
                <li>
                  <p>Collection</p>
                </li>
                <li>
                  <a href=" /">{intl.formatMessage({ id: "men" })}</a>
                </li>
                <li>
                  <a href="/">{intl.formatMessage({ id: "women" })}</a>
                </li>
                <li>
                  <a href="/">{intl.formatMessage({ id: "kids" })}</a>
                </li>
                <li>
                  <a href="/">{intl.formatMessage({ id: "bags" })}</a>
                </li>
                <li>
                  <a href="/">{intl.formatMessage({ id: "accessories" })}</a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li>
                  <p>Ride</p>
                </li>
                <li>
                  <a href="/">{intl.formatMessage({ id: "videos" })}</a>
                </li>
                <li>
                  <a href="/">Snowboard</a>
                </li>
                <li>
                  <a href="/">Ski</a>
                </li>
                <li>
                  <a href="/">Surf</a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li>
                  <p>Protect</p>
                </li>
                <li>
                  <a href="/">{intl.formatMessage({ id: "environment" })}</a>
                </li>
                <li>
                  <a href="/">{intl.formatMessage({ id: "fair" })}</a>
                </li>
              </ul>

              <ul class="">
                <li>
                  <p>Share</p>
                </li>
                <li>
                  <a href="/">{intl.formatMessage({ id: "news" })}</a>
                </li>
                <li>
                  <a href="/">We are Picture</a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li>
                  <p>Services</p>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li>
                  <a href="/">{intl.formatMessage({ id: "quality" })}</a>
                </li>
                <li>
                  <a href="/">{intl.formatMessage({ id: "return" })}</a>
                </li>
                <li>
                  <a href="/">{intl.formatMessage({ id: "cgv" })}</a>
                </li>
                <li>
                  <a href="/">
                    {intl.formatMessage({ id: "payment" })}afterSales
                  </a>
                </li>
                <li>
                  <a href="/">{intl.formatMessage({ id: "repair" })}</a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li>
                  <p>Contact</p>
                </li>
                <li>
                  <a href="/">{intl.formatMessage({ id: "contact" })}</a>
                </li>
                <li>
                  <a href="/">{intl.formatMessage({ id: "job" })}</a>
                </li>
              </ul>
            </div>
          </section>

          <hr class="container" />

          <section class="rgpd container">
            <div>
              <ul>
                <li>
                  <a href="/">{intl.formatMessage({ id: "legal" })}</a>
                </li>
                <li>
                  <a href="/">{intl.formatMessage({ id: "cookie" })}</a>
                </li>
                <li>
                  <a href="/">{intl.formatMessage({ id: "credits" })}</a>
                </li>
                <li>
                  <a href="/">{intl.formatMessage({ id: "sitemap" })}</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </footer>
    </div>
  )
}

export default Layout
