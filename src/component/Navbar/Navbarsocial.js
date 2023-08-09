import React from "react";
import "./navbarsocial.css";

const Navbarsocial = () => {
  return (
    <div className="social">
      <div class="row py-2 px-lg-5 snipcss-hcjox">
        <div class="col-lg-8 text-center text-lg-left mb-2 mb-lg-0">
          <div class="d-inline-flex align-items-center text-white">
            <small>
              <i class="fa fa-phone-alt mr-2"></i>
              0674-2371098, 6372134418, 6372122695
            </small>
            <small class="px-3">|</small>
            <small>
              <i class="fa fa-envelope mr-2"></i>
              E: admissionathps@gmail.com | www.hi-techpublicschool.org
            </small>
          </div>
        </div>
        <div class="col-lg-4 text-center text-lg-right">
          <div class="d-inline-flex align-items-center">
            <a class="text-white px-2" href="">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a class="text-white px-2" href="">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="text-white px-2" href="">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a class="text-white px-2" href="">
              <i class="fab fa-instagram"></i>
            </a>
            <a class="text-white pl-2" href="">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbarsocial;
