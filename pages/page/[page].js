import Link from "next/link";
import MainContainer from "../../components/MainContainer";
import Image from "next/image";

const Page = ({ users, totalPosts }) => {
  return (
    <MainContainer>
      <ul>
        {totalPosts.slice(1, 11).map(({ id, name, title, address, avatar }) => (
          <li key={id} class="mx-4">
            <div class="xl:flex xl:flex-row-reverse xl:justify-between bg-slate-200 shadow-lg rounded-lg  md:mx-auto my-2 xl:max-w-7xl md:max-w-2xl md:bg-white">
              <div class="flex justify-between items-center  pl-16 pr-4 py-6 xl:py-6 xl:pr-8 xl:pl-0">
                <div class="flex align-middle">
                  <span>
                    <svg
                      class="w-2.5 h-2.5 xl:w-4 xl:h-4"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.69871 4.58966C7.42979 2.93116 8.82013 0.000488281 9.51634 0.000488281C10.5274 -0.000511719 12.7421 5.68649 12.7421 5.68649C12.7421 5.68649 14.7923 5.86549 16.4493 6.04849C17.3289 6.14549 18.8997 6.29349 18.998 6.77849C19.019 6.88349 18.8927 7.31249 18.663 7.61149C17.69 8.88149 15.1654 11.6025 15.1654 11.6025C15.1654 11.6025 15.3038 12.9025 15.4272 14.3245C15.5064 15.2445 15.7201 17.1085 15.6428 17.4415C15.5586 17.8085 15.4071 17.9085 15.2497 17.9665C14.8384 18.1165 13.8835 17.5335 12.7682 16.9995C11.2486 16.2705 9.54141 15.4915 9.54141 15.4915C9.54141 15.4915 8.41501 16.0805 7.07998 16.6555C5.65367 17.2695 4.20931 18.2815 3.60649 17.9255C3.23035 17.7025 3.50919 15.9645 3.65363 14.4175C3.78904 12.9585 3.90639 11.6255 3.90639 11.6255C3.90639 11.6255 3.06987 10.6435 2.09592 9.59349C1.04375 8.45849 -0.239128 7.23349 0.0387113 6.78349C0.248344 6.44349 1.20523 6.26149 2.81209 6.06249C4.51924 5.85049 6.22439 5.70049 6.22439 5.70049C6.22439 5.70049 6.41022 5.24412 6.69871 4.58966Z"
                        fill="#38415D"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      class="w-2.5 h-2.5 xl:w-4 xl:h-4"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.69871 4.58966C7.42979 2.93116 8.82013 0.000488281 9.51634 0.000488281C10.5274 -0.000511719 12.7421 5.68649 12.7421 5.68649C12.7421 5.68649 14.7923 5.86549 16.4493 6.04849C17.3289 6.14549 18.8997 6.29349 18.998 6.77849C19.019 6.88349 18.8927 7.31249 18.663 7.61149C17.69 8.88149 15.1654 11.6025 15.1654 11.6025C15.1654 11.6025 15.3038 12.9025 15.4272 14.3245C15.5064 15.2445 15.7201 17.1085 15.6428 17.4415C15.5586 17.8085 15.4071 17.9085 15.2497 17.9665C14.8384 18.1165 13.8835 17.5335 12.7682 16.9995C11.2486 16.2705 9.54141 15.4915 9.54141 15.4915C9.54141 15.4915 8.41501 16.0805 7.07998 16.6555C5.65367 17.2695 4.20931 18.2815 3.60649 17.9255C3.23035 17.7025 3.50919 15.9645 3.65363 14.4175C3.78904 12.9585 3.90639 11.6255 3.90639 11.6255C3.90639 11.6255 3.06987 10.6435 2.09592 9.59349C1.04375 8.45849 -0.239128 7.23349 0.0387113 6.78349C0.248344 6.44349 1.20523 6.26149 2.81209 6.06249C4.51924 5.85049 6.22439 5.70049 6.22439 5.70049C6.22439 5.70049 6.41022 5.24412 6.69871 4.58966Z"
                        fill="#38415D"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      class="w-2.5 h-2.5 xl:w-4 xl:h-4"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.69871 4.58966C7.42979 2.93116 8.82013 0.000488281 9.51634 0.000488281C10.5274 -0.000511719 12.7421 5.68649 12.7421 5.68649C12.7421 5.68649 14.7923 5.86549 16.4493 6.04849C17.3289 6.14549 18.8997 6.29349 18.998 6.77849C19.019 6.88349 18.8927 7.31249 18.663 7.61149C17.69 8.88149 15.1654 11.6025 15.1654 11.6025C15.1654 11.6025 15.3038 12.9025 15.4272 14.3245C15.5064 15.2445 15.7201 17.1085 15.6428 17.4415C15.5586 17.8085 15.4071 17.9085 15.2497 17.9665C14.8384 18.1165 13.8835 17.5335 12.7682 16.9995C11.2486 16.2705 9.54141 15.4915 9.54141 15.4915C9.54141 15.4915 8.41501 16.0805 7.07998 16.6555C5.65367 17.2695 4.20931 18.2815 3.60649 17.9255C3.23035 17.7025 3.50919 15.9645 3.65363 14.4175C3.78904 12.9585 3.90639 11.6255 3.90639 11.6255C3.90639 11.6255 3.06987 10.6435 2.09592 9.59349C1.04375 8.45849 -0.239128 7.23349 0.0387113 6.78349C0.248344 6.44349 1.20523 6.26149 2.81209 6.06249C4.51924 5.85049 6.22439 5.70049 6.22439 5.70049C6.22439 5.70049 6.41022 5.24412 6.69871 4.58966Z"
                        fill="#38415D"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      class="w-2.5 h-2.5 xl:w-4 xl:h-4"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.69871 4.58966C7.42979 2.93116 8.82013 0.000488281 9.51634 0.000488281C10.5274 -0.000511719 12.7421 5.68649 12.7421 5.68649C12.7421 5.68649 14.7923 5.86549 16.4493 6.04849C17.3289 6.14549 18.8997 6.29349 18.998 6.77849C19.019 6.88349 18.8927 7.31249 18.663 7.61149C17.69 8.88149 15.1654 11.6025 15.1654 11.6025C15.1654 11.6025 15.3038 12.9025 15.4272 14.3245C15.5064 15.2445 15.7201 17.1085 15.6428 17.4415C15.5586 17.8085 15.4071 17.9085 15.2497 17.9665C14.8384 18.1165 13.8835 17.5335 12.7682 16.9995C11.2486 16.2705 9.54141 15.4915 9.54141 15.4915C9.54141 15.4915 8.41501 16.0805 7.07998 16.6555C5.65367 17.2695 4.20931 18.2815 3.60649 17.9255C3.23035 17.7025 3.50919 15.9645 3.65363 14.4175C3.78904 12.9585 3.90639 11.6255 3.90639 11.6255C3.90639 11.6255 3.06987 10.6435 2.09592 9.59349C1.04375 8.45849 -0.239128 7.23349 0.0387113 6.78349C0.248344 6.44349 1.20523 6.26149 2.81209 6.06249C4.51924 5.85049 6.22439 5.70049 6.22439 5.70049C6.22439 5.70049 6.41022 5.24412 6.69871 4.58966Z"
                        fill="#38415D"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      class="w-2.5 h-2.5 xl:w-4 xl:h-4"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.69871 4.58966C7.42979 2.93116 8.82013 0.000488281 9.51634 0.000488281C10.5274 -0.000511719 12.7421 5.68649 12.7421 5.68649C12.7421 5.68649 14.7923 5.86549 16.4493 6.04849C17.3289 6.14549 18.8997 6.29349 18.998 6.77849C19.019 6.88349 18.8927 7.31249 18.663 7.61149C17.69 8.88149 15.1654 11.6025 15.1654 11.6025C15.1654 11.6025 15.3038 12.9025 15.4272 14.3245C15.5064 15.2445 15.7201 17.1085 15.6428 17.4415C15.5586 17.8085 15.4071 17.9085 15.2497 17.9665C14.8384 18.1165 13.8835 17.5335 12.7682 16.9995C11.2486 16.2705 9.54141 15.4915 9.54141 15.4915C9.54141 15.4915 8.41501 16.0805 7.07998 16.6555C5.65367 17.2695 4.20931 18.2815 3.60649 17.9255C3.23035 17.7025 3.50919 15.9645 3.65363 14.4175C3.78904 12.9585 3.90639 11.6255 3.90639 11.6255C3.90639 11.6255 3.06987 10.6435 2.09592 9.59349C1.04375 8.45849 -0.239128 7.23349 0.0387113 6.78349C0.248344 6.44349 1.20523 6.26149 2.81209 6.06249C4.51924 5.85049 6.22439 5.70049 6.22439 5.70049C6.22439 5.70049 6.41022 5.24412 6.69871 4.58966Z"
                        fill="#38415D"
                      />
                    </svg>
                  </span>
                </div>
                <span class="hidden xl:block xl:relative xl:left-36 xl:bottom-12">
                  <svg
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
                </span>
                <p class="font-normal font-proximanova text-jobs-color-text text-sm xl:relative xl:top-11 xl:left-3">
                  Posted 2 days ago
                </p>
              </div>
              <div class="flex items-start px-4 py-6 xl:py-6">
                <div class="flex-none">
                  <Image
                    src={`${avatar}`}
                    className=" rounded-full object-cover shadow"
                    width={60}
                    height={60}
                    alt="avatar"
                  ></Image>
                </div>

                <div class="ml-6 ">
                  <div class="flex items-center justify-between">
                    <Link href={`/users/${id}`}>
                      <a class="text-lg font-semibold text-job-text-color font-proximanova -mt-1">
                        {" "}
                        {title}{" "}
                      </a>
                    </Link>
                  </div>

                  <p class="mt-2 font-normal font-proximanova text-jobs-color-text text-base">
                    Department name • {name}
                  </p>
                  <div class="mt-2 flex ">
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
                    <p class="ml-2.5 font-normal font-proximanova text-jobs-color-text text-base">
                      {address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div class="max-w-2xl mx-auto text-center my-12">
        <nav>
          <ul class="inline-flex items-center bg-white">
            {[0].map((page) => {
              return (
                <li>
                  <Link href={page === 0 ? "/" : `/page/${page - 1}`}>
                    <a class="block py-2 px-3 ml-0 leading-tight text-navPaginate ">
                      <span class="sr-only">Previous</span>
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                </li>
              );
            })}

            {[0, 1].map((page) => {
              return (
                <>
                  <li key={page} className="page-item p-2">
                    <Link href={page === 0 ? "/" : `/page/${page + 1}`}>
                      <a class="py-2 px-3 leading-tight text-transparent text-base bg-white hover:border-b-[3px] hover:border-hoverPagination  hover:text-hoverPagination ">
                        {page + 1}
                      </a>
                    </Link>
                  </li>
                </>
              );
            })}
            {[1].map((page) => {
              return (
                <li>
                  <Link href={page === 0 ? "/" : `/page/${page + 1}`}>
                    <a class="block py-2 px-3 leading-tight text-navPaginate ">
                      <span class="sr-only">Next</span>
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </MainContainer>
  );
};

export default Page;

export async function getServerSideProps({ params }) {
  const response = await fetch(`http://localhost:3000/api/socials`);
  const users = await response.json();
  let totalPosts;
  if (Number(params.page) == 1) {
    totalPosts = users.slice(0, 10);
  }
  if (Number(params.page) == 2) {
    totalPosts = users.slice(11, 21);
  }
  return {
    props: { totalPosts: totalPosts },
  };
}
