import Link from "next/link";
import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import Iframe from "react-iframe";

export default function User({ user }) {
  const {
    id,
    name,
    title,
    address,
    avatar,
    description,
    salary,
    pictures,
    employment_type,
    benefits,
    phone,
    email,
  } = user[0];
  const textDescriptionArray = description.split("\n");
  const descriptionText = textDescriptionArray[1];
  const Responsopilities = textDescriptionArray[3];
  const descriptionTextBottom = textDescriptionArray[4];
  const descriptionListTitle = textDescriptionArray[6];
  const descriptionList = textDescriptionArray[7]
    .split(".")
    .filter((elem) => elem !== "");
  // console.log(descriptionList);
  const { query } = useRouter();
  return (
    <MainContainer>
      <div class="flex items-center justify-center min-h-screen bg-white">
        {" "}
        <div class=" xl:max-w-7xl lg:flex p-5 bg-white">
          <div class="xl:max-w-3xl">
            <div class="flex w-full items-center justify-between border-b border-opacity-10 border-job-text-color pb-3">
              <div class="text-2xl font-bold text-job-text-color font-proximanova">
                Job Details
              </div>
            </div>
            <div class="flex items-center space-x-8 mt-3 xl:relative xl:bottom-14 xl:left-2/3">
              <div class="flex items-center">
                <div class="flex-none">
                  <img class="xl:hidden" src="/star-job.png" alt="star" />
                </div>

                <svg
                  class="hidden xl:block"
                  width="18"
                  height="23"
                  viewBox="0 0 18 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 4.00016C1 2.5274 2.19391 1.3335 3.66667 1.3335H14.3333C15.8061 1.3335 17 2.5274 17 4.00016V19.9936C17 21.1595 15.609 21.7639 14.7567 20.9682L9.90994 16.4428C9.39761 15.9645 8.60239 15.9645 8.09007 16.4428L3.24327 20.9682C2.39104 21.7639 1 21.1595 1 19.9936V4.00016Z"
                    stroke="#70778B"
                    stroke-width="2"
                  />
                </svg>
                <p class=" text-job-discription-color pl-2 font-proximanova xl:font-roboto font-normal text-lg">
                  Save to my list
                </p>
              </div>
              <div class="flex items-center">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.8"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.04 14.9096L5.91 10.743C5.96 10.512 6 10.2811 6 10.0402C6 9.7992 5.96 9.56827 5.91 9.33735L12.96 5.21084C13.5 5.71285 14.21 6.0241 15 6.0241C16.66 6.0241 18 4.67871 18 3.01205C18 1.34538 16.66 0 15 0C13.34 0 12 1.34538 12 3.01205C12 3.25301 12.04 3.48394 12.09 3.71486L5.04 7.84137C4.5 7.33936 3.79 7.02811 3 7.02811C1.34 7.02811 0 8.37349 0 10.0402C0 11.7068 1.34 13.0522 3 13.0522C3.79 13.0522 4.5 12.741 5.04 12.239L12.16 16.4157C12.11 16.6265 12.08 16.8474 12.08 17.0683C12.08 18.6847 13.39 20 15 20C16.61 20 17.92 18.6847 17.92 17.0683C17.92 15.4518 16.61 14.1365 15 14.1365C14.24 14.1365 13.56 14.4378 13.04 14.9096Z"
                    fill="#38415D"
                  />
                </svg>

                <p class=" text-job-discription-color pl-2 font-proximanova xl:font-roboto font-normal text-lg">
                  Share
                </p>
              </div>
            </div>
            <div class="hidden xl:block mb-8 ">
              <button class="text-white uppercase font-semibold text-xs bg-btn-bg-apply-color py-5 px-8 rounded-md font-proximanova">
                Apply now
              </button>
            </div>
            <div class="mt-4 mb-6">
              <div class="lg:flex xl:justify-between items-start">
                <div class="xl:w-9/12 mb-2 text-2xl font-bold font-proximanova text-job-text-color">
                  {title}
                </div>
                <div class=" flex justify-between items-center">
                  <p class="xl:hidden text-job-discription-color font-proximanova">
                    Posted 2 days ago
                  </p>
                  <div class="xl:flex xl:flex-col-reverse">
                    <p class="text-job-text-color font-proximanova font-normal text-lg">
                      Brutto, per year
                    </p>
                    <p class="text-job-text-color font-proximanova font-bold text-xl">
                      &#8364;&nbsp;{salary}
                    </p>
                  </div>
                </div>
              </div>
              <p class="hidden xl:block text-job-discription-color font-proximanova mb-2 xl:font-roboto font-normal text-lg">
                Posted 2 days ago
              </p>

              <div class="text-job-text-color">
                <p class="font-proximanova text-job-discription-color xl:font-roboto text-lg mb-7">
                  {descriptionText}
                </p>
                <p class="font-proximanova text-job-discription-color font-bold text-xl mb-5">
                  {Responsopilities}
                </p>
                <p class="font-proximanova text-job-discription-color xl:font-roboto text-lg mb-7">
                  {descriptionTextBottom}
                </p>
                <p class="font-proximanova text-job-discription-color font-bold text-xl mb-5">
                  {descriptionListTitle}
                </p>
                <p class="font-proximanova text-job-discription-color xl:font-roboto text-lg">
                  Our physicians enjoy a wide range of benefits, including:
                </p>
                <ul>
                  {descriptionList.map((li) => (
                    <li class="flex">
                      <div class="flex-none">
                        <svg
                          class="inline-block"
                          width="9"
                          height="9"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="9"
                            height="9"
                            fill="#384564"
                            fill-opacity="0.632594"
                          />
                        </svg>
                      </div>

                      <p class="pl-2 font-proximanova text-job-discription-color xl:font-roboto text-lg">
                        {li}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div class="text-center xl:text-left">
              <button class="text-white  uppercase bg-btn-bg-apply-color py-5 px-8 rounded-md font-proximanova font-semibold text-xs">
                Apply now
              </button>
            </div>
            <div class="xl:flex xl:flex-col-reverse">
              <div>
                <div class="w-full items-center justify-between border-b border-opacity-10 border-job-text-color pb-3">
                  <p class="text-3xl font-bold font-proximanova text-job-discription-color mt-20">
                    Attached images
                  </p>
                </div>
                <div class="flex mt-6">
                  <img
                    src={pictures[0] + `?rundom=${Math.random()}`}
                    alt="picture"
                  />
                  <img
                    src={pictures[1] + `?rundom=${Math.random()}`}
                    alt="picture"
                  />
                  <img
                    class="hidden xl:block"
                    src={pictures[2] + `?rundom=${Math.random()}`}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div class="w-full items-center justify-between border-b border-opacity-10 border-job-text-color pb-3">
                  <p class="text-3xl font-bold font-proximanova text-job-discription-color mt-20">
                    Additional info
                  </p>
                </div>
                <div>
                  <p class="font-proximanova text-job-discription-color mt-6 mb-3">
                    Employment type
                  </p>
                  <div class="mb-6">
                    {employment_type.map((button) => (
                      <button class="employment-btn-style text-btn-text-color-employ py-4 px-3 xl:px-10">
                        {button}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p class="font-proximanova text-job-discription-color mb-3">
                    Benefits
                  </p>
                  <div>
                    {benefits.map((button) => (
                      <button class="btn-benefits-style text-btn-text-color-benefit py-4 px-3 xl:px-10">
                        {button}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button class="hidden xl:flex font-proximanova w-52 rounded-lg text-job-text-color bg-opacity-10 bg-job-text-color">
                <Link href={`/`}>
                  <a class="text-lg font-semibold text-gray-900 font-proximanova -mt-1">
                    <img src="/Arrow.png" alt="arrow" />
                    <p>RETURN TO JOB BOARD</p>
                  </a>
                </Link>
              </button>
            </div>
            <div class="xl:hidden w-full  border-b border-opacity-10 border-job-text-color pb-3">
              <p class="text-lg font-bold text-slate-700 font-proximanova">
                Contacts
              </p>
            </div>
          </div>
          <div class="card-container flex  items-center flex-col xl:ml-28 xl:w-4/6 bg-bg-contacts mt-2 font-proximanova text-text-color-contacts">
            <div class="mt-8">
              <p class="font-bold text-xl pb-2">Department name. {name}.</p>
              <p class="flex items-center font-normal text-lg pb-2">
                <svg
                  width="13"
                  height="18"
                  viewBox="0 0 13 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.5 18C6.5 18 13 11.9706 13 7C13 2.02944 10.0899 0 6.5 0C2.91015 0 0 2.02944 0 7C0 11.9706 6.5 18 6.5 18ZM6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3C4.567 3 3 4.567 3 6.5C3 8.433 4.567 10 6.5 10Z"
                    fill="#878D9D"
                  />
                </svg>
                <span class="pl-2 font-normal text-lg pb-2">{address}</span>
              </p>
              <p class="font-normal text-lg">{phone}</p>
              <p class="font-normal text-lg">{email}</p>
            </div>
            <div class="w-full relative top-7">
              <Iframe
                url="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                width="100%"
                height="220px"
                id=""
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `http://localhost:3000/api/socials/${params.id}`
  );

  const user = await response.json();
  return {
    props: { user },
  };
}
