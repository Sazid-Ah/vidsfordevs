import "./home.css";
import React from "react";
import app_config from "../../config";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const url = app_config.backend_url;
  const navigate = useNavigate();

  return (
    <>
      <section id="hero" class="hero d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                We provide a platform by and for Developers
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                Here you can get all your problems solved in the form of videos
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div class="text-center text-lg-start">
                  <a
                    href=""
                    onClick={(e) => navigate("/main/login")}
                    class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Get Started</span>
                    <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img
                src={url + "/images/hero-img.png"}
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">
            <div class="row gx-0">
              <div
                class="col-lg-6 d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="content">
                  <h3>Who We Are</h3>
                  <h2>
                    We are a community of developers always ready to help new
                    and stuggling developers and to build stronger community
                  </h2>
                  <p>
                    This platform provides the service for asking queries and
                    getting the solutions in the form of videos so that everyone
                    can understand programming.
                  </p>
                  <div class="text-center text-lg-start">
                    <a
                      onClick={(e) => navigate("/main/signup")}
                      class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                    >
                      <span>Get Started</span>
                      <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-6 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <img src={url + "/images/about.jpg"} class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section id="values" class="values">
          <div class="container" data-aos="fade-up">
            <header class="section-header">
              <h2>Our Features</h2>
              <p>This is one the unique platforms present on internet</p>
            </header>

            <div class="row">
              <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div class="box">
                  <img
                    src={url + "/images/values-1.png"}
                    class="img-fluid"
                    alt=""
                  />
                  <h3>Ask Queries anytime</h3>
                  <p>
                    You can ask queries from the provided inreactive query
                    creatoer so that anything is not missed.
                  </p>
                </div>
              </div>

              <div
                class="col-lg-4 mt-4 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div class="box">
                  <img
                    src={url + "/images/values-2.png"}
                    class="img-fluid"
                    alt=""
                  />
                  <h3>Get Solutions in the forms of videos</h3>
                  <p>
                    Solutions in the form of text or code is not helpful so we
                    provide a feature providing solution in video form.
                  </p>
                </div>
              </div>

              <div
                class="col-lg-4 mt-4 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div class="box">
                  <img
                    src={url + "/images/values-3.png"}
                    class="img-fluid"
                    alt=""
                  />
                  <h3>Communicate with the community.</h3>
                  <p>
                    There is a huge community of developers so you can
                    communicate with them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="counts" class="counts">
          <div class="container" data-aos="fade-up">
            <div class="row gy-4">
              <div class="col-lg-3 col-md-6">
                <div class="count-box">
                  <i class="bi bi-emoji-smile"></i>
                  <div>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="232"
                      data-purecounter-duration="1"
                      class="purecounter"
                    ></span>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="count-box">
                  <i
                    class="bi bi-journal-richtext"
                    style={{ color: "#ee6c20" }}
                  ></i>
                  <div>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="521"
                      data-purecounter-duration="1"
                      class="purecounter"
                    ></span>
                    <p>Projects</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="count-box">
                  <i class="bi bi-headset" style={{ color: "#15be56" }}></i>
                  <div>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="1463"
                      data-purecounter-duration="1"
                      class="purecounter"
                    ></span>
                    <p>Hours Of Support</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="count-box">
                  <i class="bi bi-people" style={{ color: "#bb0852" }}></i>
                  <div>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="15"
                      data-purecounter-duration="1"
                      class="purecounter"
                    ></span>
                    <p>Hard Workers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" class="features">
          <div class="container" data-aos="fade-up">
            <header class="section-header">
              <h2>Features</h2>
              <p>Laboriosam et omnis fuga quis dolor direda fara</p>
            </header>

            <div class="row">
              <div class="col-lg-6">
                <img
                  src={url + "/images/features.png"}
                  class="img-fluid"
                  alt=""
                />
              </div>

              <div class="col-lg-6 mt-5 mt-lg-0 d-flex">
                <div class="row align-self-center gy-4">
                  <div
                    class="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="200"
                  >
                    <div class="feature-box d-flex align-items-center">
                      <i class="bi bi-check"></i>
                      <h3>Eos aspernatur rem</h3>
                    </div>
                  </div>

                  <div
                    class="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="300"
                  >
                    <div class="feature-box d-flex align-items-center">
                      <i class="bi bi-check"></i>
                      <h3>Facilis neque ipsa</h3>
                    </div>
                  </div>

                  <div
                    class="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="400"
                  >
                    <div class="feature-box d-flex align-items-center">
                      <i class="bi bi-check"></i>
                      <h3>Volup amet voluptas</h3>
                    </div>
                  </div>

                  <div
                    class="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="500"
                  >
                    <div class="feature-box d-flex align-items-center">
                      <i class="bi bi-check"></i>
                      <h3>Rerum omnis sint</h3>
                    </div>
                  </div>

                  <div
                    class="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="600"
                  >
                    <div class="feature-box d-flex align-items-center">
                      <i class="bi bi-check"></i>
                      <h3>Alias possimus</h3>
                    </div>
                  </div>

                  <div
                    class="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="700"
                  >
                    <div class="feature-box d-flex align-items-center">
                      <i class="bi bi-check"></i>
                      <h3>Repellendus mollitia</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row feture-tabs" data-aos="fade-up">
              <div class="col-lg-6">
                <h3>
                  Neque officiis dolore maiores et exercitationem quae est seda
                  lidera pat claero
                </h3>

                <ul class="nav nav-pills mb-3">
                  <li>
                    <a
                      class="nav-link active"
                      data-bs-toggle="pill"
                      href="#tab1"
                    >
                      Saepe fuga
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" data-bs-toggle="pill" href="#tab2">
                      Voluptates
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" data-bs-toggle="pill" href="#tab3">
                      Corrupti
                    </a>
                  </li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane fade show active" id="tab1">
                    <p>
                      Consequuntur inventore voluptates consequatur aut vel et.
                      Eos doloribus expedita. Sapiente atque consequatur minima
                      nihil quae aspernatur quo suscipit voluptatem.
                    </p>
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-check2"></i>
                      <h4>
                        Repudiandae rerum velit modi et officia quasi facilis
                      </h4>
                    </div>
                    <p>
                      Laborum omnis voluptates voluptas qui sit aliquam
                      blanditiis. Sapiente minima commodi dolorum non eveniet
                      magni quaerat nemo et.
                    </p>
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-check2"></i>
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>
                      Non quod totam minus repellendus autem sint velit. Rerum
                      debitis facere soluta tenetur. Iure molestiae assumenda
                      sunt qui inventore eligendi voluptates nisi at. Dolorem
                      quo tempora. Quia et perferendis.
                    </p>
                  </div>
                  <div class="tab-pane fade show" id="tab2">
                    <p>
                      Consequuntur inventore voluptates consequatur aut vel et.
                      Eos doloribus expedita. Sapiente atque consequatur minima
                      nihil quae aspernatur quo suscipit voluptatem.
                    </p>
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-check2"></i>
                      <h4>
                        Repudiandae rerum velit modi et officia quasi facilis
                      </h4>
                    </div>
                    <p>
                      Laborum omnis voluptates voluptas qui sit aliquam
                      blanditiis. Sapiente minima commodi dolorum non eveniet
                      magni quaerat nemo et.
                    </p>
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-check2"></i>
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>
                      Non quod totam minus repellendus autem sint velit. Rerum
                      debitis facere soluta tenetur. Iure molestiae assumenda
                      sunt qui inventore eligendi voluptates nisi at. Dolorem
                      quo tempora. Quia et perferendis.
                    </p>
                  </div>

                  <div class="tab-pane fade show" id="tab3">
                    <p>
                      Consequuntur inventore voluptates consequatur aut vel et.
                      Eos doloribus expedita. Sapiente atque consequatur minima
                      nihil quae aspernatur quo suscipit voluptatem.
                    </p>
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-check2"></i>
                      <h4>
                        Repudiandae rerum velit modi et officia quasi facilis
                      </h4>
                    </div>
                    <p>
                      Laborum omnis voluptates voluptas qui sit aliquam
                      blanditiis. Sapiente minima commodi dolorum non eveniet
                      magni quaerat nemo et.
                    </p>
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-check2"></i>
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>
                      Non quod totam minus repellendus autem sint velit. Rerum
                      debitis facere soluta tenetur. Iure molestiae assumenda
                      sunt qui inventore eligendi voluptates nisi at. Dolorem
                      quo tempora. Quia et perferendis.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <img
                  src={url + "/images/features-2.png"}
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div class="row feature-icons" data-aos="fade-up">
              <h3>Ratione mollitia eos ab laudantium rerum beatae quo</h3>

              <div class="row">
                <div
                  class="col-xl-4 text-center"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <img
                    src="assets/img/features-3.png"
                    class="img-fluid p-4"
                    alt=""
                  />
                </div>

                <div class="col-xl-8 d-flex content">
                  <div class="row align-self-center gy-4">
                    <div class="col-md-6 icon-box" data-aos="fade-up">
                      <i class="ri-line-chart-line"></i>
                      <div>
                        <h4>Corporis voluptates sit</h4>
                        <p>
                          Consequuntur sunt aut quasi enim aliquam quae harum
                          pariatur laboris nisi ut aliquip
                        </p>
                      </div>
                    </div>

                    <div
                      class="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <i class="ri-stack-line"></i>
                      <div>
                        <h4>Ullamco laboris nisi</h4>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt
                        </p>
                      </div>
                    </div>

                    <div
                      class="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <i class="ri-brush-4-line"></i>
                      <div>
                        <h4>Labore consequatur</h4>
                        <p>
                          Aut suscipit aut cum nemo deleniti aut omnis.
                          Doloribus ut maiores omnis facere
                        </p>
                      </div>
                    </div>

                    <div
                      class="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <i class="ri-magic-line"></i>
                      <div>
                        <h4>Beatae veritatis</h4>
                        <p>
                          Expedita veritatis consequuntur nihil tempore
                          laudantium vitae denat pacta
                        </p>
                      </div>
                    </div>

                    <div
                      class="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <i class="ri-command-line"></i>
                      <div>
                        <h4>Molestiae dolor</h4>
                        <p>
                          Et fuga et deserunt et enim. Dolorem architecto
                          ratione tensa raptor marte
                        </p>
                      </div>
                    </div>

                    <div
                      class="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <i class="ri-radar-line"></i>
                      <div>
                        <h4>Explicabo consectetur</h4>
                        <p>
                          Est autem dicta beatae suscipit. Sint veritatis et sit
                          quasi ab aut inventore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" class="services">
          <div class="container" data-aos="fade-up">
            <header class="section-header">
              <h2>Services</h2>
              <p>Veritatis et dolores facere numquam et praesentium</p>
            </header>

            <div class="row gy-4">
              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="service-box blue">
                  <i class="ri-discuss-line icon"></i>
                  <h3>Nesciunt Mete</h3>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis tempore et
                    consequatur.
                  </p>
                  <a href="#" class="read-more">
                    <span>Read More</span> <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="service-box orange">
                  <i class="ri-discuss-line icon"></i>
                  <h3>Eosle Commodi</h3>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto
                    sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                  </p>
                  <a href="#" class="read-more">
                    <span>Read More</span> <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div class="service-box green">
                  <i class="ri-discuss-line icon"></i>
                  <h3>Ledo Markt</h3>
                  <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                    Minus ea aut. Vel qui id voluptas adipisci eos earum
                    corrupti.
                  </p>
                  <a href="#" class="read-more">
                    <span>Read More</span> <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div class="service-box red">
                  <i class="ri-discuss-line icon"></i>
                  <h3>Asperiores Commodi</h3>
                  <p>
                    Non et temporibus minus omnis sed dolor esse consequatur.
                    Cupiditate sed error ea fuga sit provident adipisci neque.
                  </p>
                  <a href="#" class="read-more">
                    <span>Read More</span> <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div class="service-box purple">
                  <i class="ri-discuss-line icon"></i>
                  <h3>Velit Doloremque.</h3>
                  <p>
                    Cumque et suscipit saepe. Est maiores autem enim facilis ut
                    aut ipsam corporis aut. Sed animi at autem alias eius
                    labore.
                  </p>
                  <a href="#" class="read-more">
                    <span>Read More</span> <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div class="service-box pink">
                  <i class="ri-discuss-line icon"></i>
                  <h3>Dolori Architecto</h3>
                  <p>
                    Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                    neque non et debitis iure. Corrupti recusandae ducimus enim.
                  </p>
                  <a href="#" class="read-more">
                    <span>Read More</span> <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="contact">
          <div class="container" data-aos="fade-up">
            <header class="section-header">
              <h2>Contact</h2>
              <p>Contact Us</p>
            </header>

            <div class="row gy-4">
              <div class="col-lg-6">
                <div class="row gy-4">
                  <div class="col-md-6">
                    <div class="info-box">
                      <i class="bi bi-geo-alt"></i>
                      <h3>Address</h3>
                      <p>
                        A108 Adam Street,
                        <br />
                        New York, NY 535022
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="info-box">
                      <i class="bi bi-telephone"></i>
                      <h3>Call Us</h3>
                      <p>
                        +1 5589 55488 55
                        <br />
                        +1 6678 254445 41
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="info-box">
                      <i class="bi bi-envelope"></i>
                      <h3>Email Us</h3>
                      <p>
                        info@example.com
                        <br />
                        contact@example.com
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="info-box">
                      <i class="bi bi-clock"></i>
                      <h3>Open Hours</h3>
                      <p>
                        Monday - Friday
                        <br />
                        9:00AM - 05:00PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <form
                  action="forms/contact.php"
                  method="post"
                  class="php-email-form"
                >
                  <div class="row gy-4">
                    <div class="col-md-6">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div class="col-md-6 ">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div class="col-md-12">
                      <input
                        type="text"
                        class="form-control"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div class="col-md-12">
                      <textarea
                        class="form-control"
                        name="message"
                        rows="6"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <div class="col-md-12 text-center">
                      <div class="loading">Loading</div>
                      <div class="error-message"></div>
                      <div class="sent-message">
                        Your message has been sent. Thank you!
                      </div>

                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
