import React from "react";
import "./about.css";

const About_us = () => {
  return (
    <div>
      <div class="container-fluid py-5 snipcss-s4wog">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <h6 class="text-primary text-uppercase font-weight-bold">
                About Us
              </h6>
              <h1 class="mb-4">Prasad International School</h1>
              <p class="mb-4">
                Prasad International School is designed to fulfill the needs of
                twenty first century learning environment. The Prasad
                International School, aim to develop each child to his or her
                fullest potential – intellectually, physically and spiritually –
                through a fully integrated curriculum, so that each child may
                grow in grace, enjoy freedom through knowledge, and lead a
                healthy, productive and meaningful life. The school aims to provide multi-dimensional
                education by striking a balance between curricular and
                co-curricular activities for the all round development of the
                individual . Rather than being solely academically oriented HTPS
                not only focuses on instilling a sense of confidence and
                discipline but also helps each student to develop a distinctive
                personality.
              </p>
              <a href="about.html" class="btn btn-primary mt-3 py-2 px-4">
                Read More
              </a>
            </div>
            <div class="col-lg-6 pb-4 pb-lg-0">
              <img
                class="img-fluid w-100 rounded-start-circle"
                src="http://pisjaunpur.com/mygallery/_data/i/upload/2020/06/26/20200626221110-8a05cb00-me.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_us;
