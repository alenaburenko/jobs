import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

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
        <div class="p-5 w-10/12 bg-white">
          <div class="flex w-full items-center justify-between border-b border-opacity-10 border-job-text-color pb-3">
            <div class="text-lg font-bold text-slate-700 font-proximanova">
              Job Details
            </div>
          </div>
          <div class="flex items-center space-x-8 mt-3">
            <div class="flex">
              <img src="/star-job.png" alt="star" />
              <p class=" text-job-discription-color pl-2 font-proximanova">
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
              <p class=" text-job-discription-color pl-2 font-proximanova">
                Share
              </p>
            </div>
          </div>

          <div class="flex justify-between items-center">
            <p class=" text-job-discription-color font-proximanova">
              Posted 2 days ago
            </p>
            <div>
              <p class="text-job-text-color font-proximanova">
                Brutto, per year
              </p>
              <p class="text-job-text-color font-proximanova">Є {salary}</p>
            </div>
          </div>

          <div class="mt-4 mb-6">
            <div class="mb-3 text-xl font-bold">{title}</div>
            <div class="text-sm text-neutral-600">
              <p class="font-proximanova text-job-discription-color">
                {descriptionText}
              </p>
              <p class="font-proximanova text-job-discription-color">
                {Responsopilities}
              </p>
              <p class="font-proximanova text-job-discription-color">
                {descriptionTextBottom}
              </p>
              <p class="font-proximanova text-job-discription-color">
                {descriptionListTitle}
              </p>
              <p class="font-proximanova text-job-discription-color">
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

                    <p class="pl-2 font-proximanova text-job-discription-color">
                      {li}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div class="text-center">
            <button class="text-white bg-btn-bg-apply-color py-5 px-6 rounded-md font-proximanova">
              Apply now
            </button>
          </div>
          <div class="w-full items-center justify-between border-b border-opacity-10 border-job-text-color pb-3">
            <p class="text-lg font-bold text-slate-700 font-proximanova">
              Attached images
            </p>
          </div>
          <div class="flex">
            <img src={pictures[0]} alt="picture" />
            <img src={pictures[0]} alt="picture" />
            <img class="hidden" src={pictures[0]} alt="" />
          </div>
          <div class="w-full items-center justify-between border-b border-opacity-10 border-job-text-color pb-3">
            <p class="text-lg font-bold text-slate-700 font-proximanova">
              Additional info
            </p>
          </div>
          <div>
            <p class="font-proximanova text-job-discription-color">
              Employment type
            </p>
            <div>
              {employment_type.map((button) => (
                <button class="employment-btn-style text-btn-text-color-employ">
                  {button}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p class="font-proximanova text-job-discription-color">Benefits</p>
            <div>
              {benefits.map((button) => (
                <button class="btn-benefits-style text-btn-text-color-benefit">
                  {button}
                </button>
              ))}
            </div>
          </div>
          <div class="w-full  border-b border-opacity-10 border-job-text-color pb-3">
            <p class="text-lg font-bold text-slate-700 font-proximanova">
              Contacts
            </p>
          </div>
          <div class="card-container bg-bg-contacts mt-2 font-proximanova text-center text-text-color-contacts">
            <p>Department name. {name}.</p>
            <p>{address}</p>
            <p>{phone}</p>
            <p>{email}</p>
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
