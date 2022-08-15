import {} from "react-bootstrap";
const Footer = () => {
  return (
    <footer class="text-center text-lg-start bg-blue text-muted">
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>ALO Blockchain Solutions
              </h6>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Company</h6>
              <p>
                <a href="#!" class="text-reset text-decoration-none">
                  Vision
                </a>
              </p>
              <p>
                <a
                  href="/students.html"
                  class="text-reset text-decoration-none"
                >
                  Students
                </a>
              </p>
              <p>
                <a
                  href="/institutions.html"
                  class="text-reset text-decoration-none"
                >
                  Institutions
                </a>
              </p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Resources</h6>
              <p>
                <a href="#!" class="text-reset">
                  Our Whitepaper
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Blockchain Introduction
                </a>
              </p>
              <p>
                <a href="/function.html" class="text-reset">
                  Why Blockchain
                </a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">About</h6>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
        <div class="text-center p-4">
          © 2022 Copyright:
          <a class="text-reset fw-bold" href="aloblockchain.com">
            aloblockchain.com
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
