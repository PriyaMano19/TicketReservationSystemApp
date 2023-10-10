import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../m_img/img2.png";
export default function Signin() {
  return (
    <>
      <section className="absolute w-full h-full">
        <div
          className="absolute top-0 w-full h-full "
          style={{
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <img src={Img1} style={{ height: "600px", width: "600px" }} />
            <div className="w-full lg:w-4/12 px-4">
              <div style={{ paddingLeft: "50px" }}>
                <div  style={{ paddingLeft: "50px" }}>
                <h1 className="p-3 text-4xl font-bold">
                  <span style={{ color: "#1B998B" }}>Mates</span>
                  <span style={{ color: "#11468F" }}>Travels</span>
                </h1>
                </div>


                <div class="grid grid-rows-3 grid-flow-col gap-4">
                  <div class="row-span-2 ...">
                    <div class="col-span-2 ...">
                      {" "}
                      <div class="p-6">
                        <div class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5} // Increase the strokeWidth to make the lines thicker
                            stroke="currentColor"
                            className="w-24 h-24" // Increase the size by changing these values
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          
                        </div>
                      </div>
                    </div>
                    <div class="col-span-2 ...">
                      {" "}
                      <div class="p-6">
                        <div class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-24 h-24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                            />
                          </svg>
                        </div>
                        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased"></p>
                      </div>
                    </div>
                  </div>
                  <div class="row-span-2 ...">
                    <div class="col-span-2 ...">
                      {" "}
                      <div class="p-6">
                        <div class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-24 h-24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                            />
                          </svg>
                        </div>
                        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased"></p>
                      </div>
                    </div>
                    <div class="col-span-2 ...">
                      {" "}
                      <div class="p-6">
                        <div class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-24 h-24"
                          >
                            <path
                              d="M5 11H19M9 18L6 21M15 18L18 21M12 15H12.01M8.2 18H15.8C16.9201 18 17.4802 18 17.908 17.782C18.2843 17.5903 18.5903 17.2843 18.782 16.908C19 16.4802 19 15.9201 19 14.8V6.2C19 5.0799 19 4.51984 18.782 4.09202C18.5903 3.71569 18.2843 3.40973 17.908 3.21799C17.4802 3 16.9201 3 15.8 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.07989 5 6.2V14.8C5 15.9201 5 16.4802 5.21799 16.908C5.40973 17.2843 5.71569 17.5903 6.09202 17.782C6.51984 18 7.07989 18 8.2 18Z"
                              stroke="#000000"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
