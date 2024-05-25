"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0.8,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const variantLeft = {
  hidden: {
    opacity: 0,
    x: 24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.1,
  },
};

const variantRight = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.1,
  },
};

export const IntegrationComponent = () => {
  return (
    <div className="grid place-content-center w-full overflow-hidden bg-transparent px-4 py-36">
      <Ping />
      <motion.div
        id="left-icons"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex relative z-20 -translate-y-8"
      >
        {/* left icons */}
        <motion.svg
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="70px"
          height="70px"
          className="rounded-full z-10 absolute right-24 -top-7"
          variants={variantLeft}
          whileHover="hover"
        >
          <g clipPath="url(#clip0_494_588)">
            <path
              d="M72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72C55.8823 72 72 55.8823 72 36Z"
              fill="#272334"
            />
            <path
              d="M71.75 36C71.75 16.2558 55.7442 0.25 36 0.25C16.2558 0.25 0.25 16.2558 0.25 36C0.25 55.7442 16.2558 71.75 36 71.75C55.7442 71.75 71.75 55.7442 71.75 36Z"
              stroke="url(#paint0_linear_494_588)"
              strokeOpacity="0.2"
              strokeWidth="0.5"
            />
          </g>
          <circle cx="36" cy="36" r="20" fill="#FF5B35" />
          <g clipPath="url(#clip1_494_588)">
            <path
              d="M42.2729 31.9627V29.0268C42.6609 28.8454 42.9894 28.5576 43.2202 28.1969C43.451 27.8361 43.5745 27.4172 43.5765 26.9889V26.9216C43.5765 25.6729 42.5642 24.6607 41.3157 24.6607H41.2482C39.9995 24.6607 38.9873 25.6729 38.9873 26.9216V26.9889C38.9893 27.4172 39.1128 27.8361 39.3436 28.1969C39.5744 28.5576 39.9029 28.8454 40.2909 29.0268V31.9627C39.1758 32.1335 38.1256 32.5959 37.2467 33.303L29.1946 27.0313C29.252 26.8241 29.282 26.6109 29.2854 26.397C29.2864 25.8931 29.1379 25.4003 28.8587 24.9808C28.5796 24.5613 28.1823 24.234 27.7171 24.0404C27.2519 23.8467 26.7398 23.7954 26.2454 23.8928C25.751 23.9903 25.2967 24.2322 24.9398 24.5879C24.5829 24.9436 24.3396 25.3972 24.2405 25.8912C24.1414 26.3853 24.1911 26.8976 24.3833 27.3634C24.5754 27.8292 24.9014 28.2276 25.32 28.5081C25.7386 28.7886 26.2309 28.9387 26.7348 28.9393C27.1756 28.9372 27.6081 28.8196 27.9892 28.598L35.9182 34.7679C34.4605 36.9701 34.4995 39.84 36.0164 42.0019L33.6048 44.4141C33.4098 44.3518 33.2068 44.3187 33.0021 44.3159C31.8472 44.3169 30.9116 45.2535 30.9119 46.4085C30.9122 47.5633 31.8484 48.4994 33.0032 48.4997C34.1582 48.5 35.0948 47.5644 35.0958 46.4095C35.0931 46.2048 35.0599 46.0018 34.9975 45.8069L37.3832 43.4203C39.5149 45.0613 42.4426 45.2027 44.7225 43.7747C47.0023 42.3466 48.1529 39.6507 47.6066 37.0166C47.0603 34.3825 44.9326 32.3665 42.2729 31.9627ZM41.284 41.6189C40.8433 41.6307 40.4046 41.5542 39.994 41.3937C39.5833 41.2332 39.209 40.9921 38.893 40.6845C38.5771 40.377 38.326 40.0093 38.1545 39.6031C37.9831 39.1969 37.8947 38.7604 37.8947 38.3195C37.8947 37.8786 37.9831 37.4422 38.1545 37.036C38.326 36.6298 38.5771 36.2621 38.893 35.9545C39.209 35.647 39.5833 35.4058 39.994 35.2454C40.4046 35.0849 40.8433 35.0083 41.284 35.0202C43.0602 35.0824 44.4681 36.5398 44.4691 38.3171C44.4699 40.0943 43.0635 41.5532 41.2873 41.6172"
              fill="#FCFEFF"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_494_588"
              x1="36"
              y1="-6.88723e-09"
              x2="36"
              y2="90"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_494_588">
              <rect width="72" height="72" fill="white" />
            </clipPath>
            <clipPath id="clip1_494_588">
              <rect
                width="25"
                height="25"
                fill="white"
                transform="translate(23.5 23.5)"
              />
            </clipPath>
          </defs>
        </motion.svg>

        <motion.svg
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          className="rounded-full z-10 absolute right-44 -top-4"
          variants={variantLeft}
          whileHover="hover"
        >
          <g clipPath="url(#clip0_494_583)">
            <path
              d="M56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56C43.464 56 56 43.464 56 28Z"
              fill="#272334"
            />
            <path
              d="M55.8056 27.9999C55.8056 12.6433 43.3566 0.194336 28 0.194336C12.6434 0.194336 0.194458 12.6433 0.194458 27.9999C0.194458 43.3565 12.6434 55.8054 28 55.8054C43.3566 55.8054 55.8056 43.3565 55.8056 27.9999Z"
              stroke="url(#paint0_linear_494_583)"
              strokeOpacity="0.2"
              strokeWidth="0.388889"
            />
          </g>
          <g clipPath="url(#clip1_494_583)">
            <circle cx="28.5" cy="27.5" r="17.5" fill="#147B3D" />
            <path
              d="M25.8075 24.3461C25.8075 26.6898 26.9964 29.2182 29.6129 29.2182C31.5533 29.2182 33.5152 27.7033 33.5152 24.3117C33.5152 21.3381 31.9729 19.3418 29.6775 19.3418C27.807 19.3418 25.8075 20.6558 25.8075 24.3461ZM30.5992 15C35.2906 15 38.445 18.7156 38.445 24.2465C38.445 29.6905 35.122 33.4912 30.3715 33.4912C28.1065 33.4912 26.6557 32.5211 25.8971 31.8189C25.9025 31.9854 25.9061 32.1718 25.9061 32.3709V39.7533H21.0462V20.0839C21.0462 19.7979 20.9547 19.7074 20.6714 19.7074H19V15.4H23.078C24.9556 15.4 25.4362 16.3556 25.5277 17.0922C26.2899 16.2379 27.8698 15 30.5992 15Z"
              fill="#CBCBCB"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_494_583"
              x1="28"
              y1="-0.000108511"
              x2="28"
              y2="69.9999"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_494_583">
              <rect width="56" height="56" fill="white" />
            </clipPath>
            <clipPath id="clip1_494_583">
              <rect
                width="35"
                height="35"
                fill="white"
                transform="translate(11 10)"
              />
            </clipPath>
          </defs>
        </motion.svg>

        <motion.svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="45px"
          height="45px"
          className="rounded-full z-10 absolute right-60 -top-3"
          variants={variantLeft}
          whileHover="hover"
        >
          <g clipPath="url(#clip0_494_577)">
            <path
              d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20Z"
              fill="#272334"
            />
            <path
              d="M39.8611 19.9998C39.8611 9.03079 30.969 0.138672 20 0.138672C9.03104 0.138672 0.138916 9.03079 0.138916 19.9998C0.138916 30.9688 9.03104 39.8609 20 39.8609C30.969 39.8609 39.8611 30.9688 39.8611 19.9998Z"
              stroke="url(#paint0_linear_494_577)"
              strokeOpacity="0.2"
              strokeWidth="0.277778"
            />
          </g>
          <g clipPath="url(#clip1_494_577)">
            <path
              d="M19.5 33C26.4036 33 32 27.4036 32 20.5C32 13.5964 26.4036 8 19.5 8C12.5964 8 7 13.5964 7 20.5C7 27.4036 12.5964 33 19.5 33Z"
              fill="#292929"
            />
            <path
              d="M18.306 19.3443H16.8702C16.8292 19.1088 16.7537 18.9002 16.6437 18.7185C16.5336 18.5342 16.3967 18.3781 16.2329 18.2501C16.0691 18.1222 15.8823 18.0262 15.6724 17.9622C15.4651 17.8957 15.2411 17.8624 15.0006 17.8624C14.5732 17.8624 14.1944 17.9699 13.8642 18.1849C13.534 18.3973 13.2756 18.7096 13.0887 19.1216C12.9019 19.5311 12.8085 20.0315 12.8085 20.6227C12.8085 21.2241 12.9019 21.7309 13.0887 22.1429C13.2781 22.5525 13.5366 22.8621 13.8642 23.072C14.1944 23.2793 14.5719 23.383 14.9967 23.383C15.2322 23.383 15.4523 23.3523 15.657 23.2908C15.8643 23.2269 16.0499 23.1334 16.2137 23.0106C16.3801 22.8877 16.5195 22.7367 16.6322 22.5576C16.7473 22.3784 16.8267 22.1736 16.8702 21.9433L18.306 21.951C18.2522 22.3247 18.1358 22.6753 17.9566 23.0029C17.78 23.3305 17.5484 23.6197 17.2618 23.8705C16.9751 24.1188 16.6398 24.3133 16.2559 24.4541C15.872 24.5923 15.4459 24.6614 14.9775 24.6614C14.2865 24.6614 13.6697 24.5014 13.1271 24.1815C12.5845 23.8616 12.1571 23.3996 11.8448 22.7956C11.5326 22.1916 11.3765 21.4673 11.3765 20.6227C11.3765 19.7755 11.5339 19.0512 11.8487 18.4498C12.1635 17.8457 12.5922 17.3838 13.1348 17.0638C13.6774 16.744 14.2916 16.584 14.9775 16.584C15.4152 16.584 15.8221 16.6454 16.1984 16.7682C16.5746 16.8911 16.9098 17.0716 17.2042 17.3096C17.4985 17.545 17.7404 17.8342 17.9298 18.1772C18.1217 18.5176 18.2471 18.9066 18.306 19.3443ZM21.2458 24.6729C20.8721 24.6729 20.5355 24.6063 20.2361 24.4733C19.9392 24.3376 19.7037 24.138 19.5297 23.8744C19.3582 23.6107 19.2725 23.2857 19.2725 22.8993C19.2725 22.5665 19.3339 22.2914 19.4568 22.0738C19.5796 21.8563 19.7472 21.6823 19.9597 21.5517C20.1721 21.4212 20.4114 21.3227 20.6776 21.2561C20.9463 21.187 21.224 21.1371 21.5107 21.1064C21.8562 21.0706 22.1364 21.0386 22.3514 21.0104C22.5664 20.9797 22.7225 20.9336 22.8198 20.8722C22.9196 20.8082 22.9695 20.7097 22.9695 20.5766V20.5536C22.9695 20.2644 22.8838 20.0404 22.7123 19.8818C22.5408 19.7231 22.2938 19.6437 21.9713 19.6437C21.631 19.6437 21.3609 19.7179 21.1613 19.8664C20.9642 20.0148 20.8311 20.1901 20.762 20.3923L19.4644 20.2081C19.5668 19.8498 19.7357 19.5503 19.9712 19.3097C20.2067 19.0666 20.4946 18.8849 20.835 18.7646C21.1754 18.6417 21.5516 18.5803 21.9637 18.5803C22.2477 18.5803 22.5306 18.6136 22.8121 18.6801C23.0936 18.7467 23.3509 18.8567 23.5838 19.0103C23.8167 19.1613 24.0035 19.3673 24.1443 19.6284C24.2876 19.8894 24.3592 20.2157 24.3592 20.6073V24.5539H23.0233V23.7438H22.9772C22.8927 23.9076 22.7737 24.0612 22.6201 24.2045C22.4691 24.3453 22.2785 24.4592 22.0481 24.5462C21.8203 24.6307 21.5529 24.6729 21.2458 24.6729ZM21.6066 23.6517C21.8856 23.6517 22.1275 23.5967 22.3322 23.4866C22.537 23.374 22.6944 23.2256 22.8044 23.0413C22.917 22.857 22.9733 22.6561 22.9733 22.4385V21.7437C22.9298 21.7795 22.8556 21.8128 22.7507 21.8435C22.6483 21.8742 22.5331 21.9011 22.4051 21.9241C22.2772 21.9472 22.1505 21.9676 22.0251 21.9855C21.8997 22.0035 21.7909 22.0188 21.6988 22.0316C21.4915 22.0598 21.3059 22.1058 21.1421 22.1698C20.9783 22.2338 20.8491 22.3234 20.7544 22.4385C20.6597 22.5512 20.6123 22.6971 20.6123 22.8762C20.6123 23.1322 20.7057 23.3254 20.8926 23.4559C21.0794 23.5865 21.3174 23.6517 21.6066 23.6517ZM27.1464 16.6915V24.5539H25.7567V16.6915H27.1464Z"
              fill="white"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_494_577"
              x1="20"
              y1="-0.000217015"
              x2="20"
              y2="49.9998"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_494_577">
              <rect width="40" height="40" fill="white" />
            </clipPath>
            <clipPath id="clip1_494_577">
              <rect
                width="25"
                height="25"
                fill="white"
                transform="translate(7 8)"
              />
            </clipPath>
          </defs>
        </motion.svg>

        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="35px"
          height="35px"
          className="rounded-full z-10 absolute right-[18.5rem] -top-[0.4rem]"
          variants={variantLeft}
          whileHover="hover"
        >
          <g clipPath="url(#clip0_494_572)">
            <path
              d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z"
              fill="#272334"
            />
            <path
              d="M23.9167 12.0002C23.9167 5.41877 18.5814 0.0834961 12 0.0834961C5.41865 0.0834961 0.083374 5.41877 0.083374 12.0002C0.083374 18.5816 5.41865 23.9168 12 23.9168C18.5814 23.9168 23.9167 18.5816 23.9167 12.0002Z"
              stroke="url(#paint0_linear_494_572)"
              strokeOpacity="0.2"
              strokeWidth="0.166667"
            />
          </g>
          <path
            d="M12 4.5C10.0109 4.5 8.10322 5.29018 6.6967 6.6967C5.29018 8.10322 4.5 10.0109 4.5 12C4.5 13.9891 5.29018 15.8968 6.6967 17.3033C8.10322 18.7098 10.0109 19.5 12 19.5C13.9891 19.5 15.8968 18.7098 17.3033 17.3033C18.7098 15.8968 19.5 13.9891 19.5 12C19.5 10.0109 18.7098 8.10322 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z"
            fill="#0288D1"
          />
          <path
            d="M8.25 10.125H9.75V15.75H8.25V10.125ZM8.9955 9.375H8.98725C8.5395 9.375 8.25 9.04125 8.25 8.62462C8.25 8.199 8.5485 7.875 9.00412 7.875C9.4605 7.875 9.74137 8.199 9.75 8.62462C9.75 9.04125 9.4605 9.375 8.9955 9.375ZM16.125 12.1875C16.125 11.0482 15.2018 10.125 14.0625 10.125C13.3643 10.125 12.7481 10.473 12.375 11.004V10.125H10.875V15.75H12.375V12.75C12.375 12.1286 12.8786 11.625 13.5 11.625C14.1214 11.625 14.625 12.1286 14.625 12.75V15.75H16.125C16.125 15.75 16.125 12.3454 16.125 12.1875Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_494_572"
              x1="12"
              y1="0.000162756"
              x2="12"
              y2="30.0002"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_494_572">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </motion.svg>
      </motion.div>

      <motion.div
        id="right-icons"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex relative z-20 -translate-y-8"
      >
        <motion.svg
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="70px"
          height="70px"
          className="bg-[#272334] rounded-full z-10 absolute left-24 -top-7"
          variants={variantLeft}
          whileHover="hover"
        >
          <g clipPath="url(#clip0_494_603)">
            <path
              d="M47.5823 35.5421C46.6826 34.1184 45.4204 32.9448 43.9178 32.1345C42.4152 31.3242 40.7231 30.9048 39.005 30.9168C37.2869 30.9288 35.6011 31.3719 34.1108 32.2031C32.6203 33.0342 31.3756 34.2254 30.497 35.6615C30.475 35.6981 30.4514 35.733 30.4295 35.7703C29.9303 36.6143 29.662 37.5689 29.6501 38.5425C29.6382 39.5162 29.8832 40.4767 30.3617 41.332C30.8401 42.1874 31.536 42.9092 32.383 43.4284C33.2299 43.9477 34.1996 44.2472 35.1995 44.2982C33.4981 44.2482 31.8382 43.7758 30.3773 42.926C28.9165 42.0762 27.7034 40.8772 26.8533 39.4429C26.0032 38.0086 25.5443 36.3869 25.5203 34.7315C25.4962 33.0761 25.9078 31.4422 26.7159 29.9852C26.72 29.9815 26.72 29.9743 26.7233 29.9704L30.3249 23.9039C32.6269 20.032 38.3741 20.032 40.6753 23.9039L47.5823 35.5421Z"
              fill="#51D7FF"
            />
            <path
              d="M36.9188 49.0352C35.4821 49.8466 33.8584 50.2928 32.1976 50.3328H24.9832C20.3847 50.3328 17.5108 45.4923 19.8083 41.6195L26.7155 29.9854C25.9073 31.4424 25.4957 33.0762 25.5196 34.7315C25.5436 36.3868 26.0024 38.0087 26.8524 39.4429C27.7024 40.8772 28.9155 42.0763 30.3762 42.9261C31.837 43.776 33.4968 44.2485 35.1982 44.2986C35.2985 44.3059 35.3989 44.3059 35.4993 44.3059C36.5132 44.3052 37.5095 44.0483 38.3907 43.5606C39.2719 43.0728 40.0078 42.3709 40.5264 41.5235C41.045 40.6762 41.3285 39.7123 41.349 38.7265C41.3696 37.7405 41.1267 36.7663 40.644 35.8991C41.921 38.1258 42.2461 40.7517 41.5491 43.2096C40.852 45.6675 39.1888 47.7599 36.9188 49.0352Z"
              fill="#318EFF"
            />
            <path
              d="M46.0173 50.333H32.1997C33.9157 50.2876 35.5905 49.8124 37.0625 48.9534C38.5346 48.0945 39.754 46.8809 40.603 45.4299C41.452 43.9787 41.9019 42.3392 41.9092 40.6697C41.9166 39.0001 41.4811 37.357 40.6448 35.8989C40.1538 35.0185 39.4325 34.2798 38.5541 33.7573C37.6756 33.2347 36.6709 32.9468 35.6414 32.9227C34.612 32.8985 33.5942 33.139 32.6908 33.6198C31.7874 34.1006 31.0305 34.8046 30.4965 35.6609C31.3747 34.2247 32.6194 33.0331 34.1099 32.2017C35.6004 31.3703 37.2863 30.9272 39.0045 30.9153C40.7227 30.9033 42.4149 31.323 43.9175 32.1336C45.42 32.9442 46.682 34.1182 47.5813 35.5422L51.1918 41.6202C53.489 45.4923 50.6154 50.333 46.0173 50.333Z"
              fill="#33B6FF"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_494_603"
              x1="36"
              y1="-6.88723e-09"
              x2="36"
              y2="90"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_494_603">
              <rect width="72" height="72" fill="white" />
            </clipPath>
          </defs>
        </motion.svg>

        <motion.svg
          width="50px"
          height="50px"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rounded-full z-10 absolute left-44 -top-4"
          variants={variantLeft}
          whileHover="hover"
        >
          <g clipPath="url(#clip0_494_607)">
            <path
              d="M56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56C43.464 56 56 43.464 56 28Z"
              fill="#272334"
            />
            <path
              d="M55.8056 27.9999C55.8056 12.6433 43.3566 0.194336 28 0.194336C12.6434 0.194336 0.194458 12.6433 0.194458 27.9999C0.194458 43.3565 12.6434 55.8054 28 55.8054C43.3566 55.8054 55.8056 43.3565 55.8056 27.9999Z"
              stroke="url(#paint0_linear_494_607)"
              strokeOpacity="0.2"
              strokeWidth="0.388889"
            />
          </g>
          <circle cx="28" cy="28" r="20" fill="#5D6AD1" />
          <g clipPath="url(#clip1_494_607)">
            <path
              d="M14.545 31.1788C14.4836 30.9172 14.7953 30.7524 14.9853 30.9424L25.0577 41.0148C25.2478 41.2048 25.083 41.5166 24.8213 41.4552C19.7384 40.2628 15.7373 36.2618 14.545 31.1788ZM14.2074 27.1419C14.2026 27.2201 14.2319 27.2964 14.2873 27.3518L28.6484 41.7128C28.7037 41.7682 28.78 41.7976 28.8582 41.7927C29.5118 41.752 30.153 41.6658 30.7789 41.5373C30.9898 41.494 31.063 41.2349 30.9108 41.0826L14.9175 25.0894C14.7653 24.9371 14.5062 25.0104 14.4628 25.2213C14.3343 25.8471 14.2481 26.4884 14.2074 27.1419ZM15.3685 22.4016C15.3226 22.5047 15.346 22.6252 15.4258 22.7051L33.2951 40.5743C33.3749 40.6541 33.4954 40.6775 33.5985 40.6316C34.0912 40.4121 34.5688 40.1646 35.029 39.8912C35.1813 39.8007 35.2048 39.5914 35.0795 39.4662L16.534 20.9206C16.4087 20.7953 16.1994 20.8188 16.109 20.9711C15.8355 21.4314 15.588 21.9089 15.3685 22.4016ZM17.699 19.193C17.5969 19.0909 17.5906 18.9271 17.6867 18.8194C20.215 15.9889 23.8928 14.207 27.9867 14.207C35.6118 14.207 41.7931 20.3884 41.7931 28.0134C41.7931 32.1073 40.0112 35.7851 37.1807 38.3134C37.0731 38.4096 36.9093 38.4033 36.8072 38.3012L17.699 19.193Z"
              fill="white"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_494_607"
              x1="28"
              y1="-0.000108511"
              x2="28"
              y2="69.9999"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_494_607">
              <rect width="56" height="56" fill="white" />
            </clipPath>
            <clipPath id="clip1_494_607">
              <rect
                width="27.5862"
                height="27.5862"
                fill="white"
                transform="translate(14.2069 14.207)"
              />
            </clipPath>
          </defs>
        </motion.svg>

        <motion.svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="45px"
          height="45px"
          className="rounded-full z-10 absolute left-60 -top-3"
          variants={variantRight}
          whileHover="hover"
        >
          <g clipPath="url(#clip0_494_612)">
            <path
              d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20Z"
              fill="#272334"
            />
            <path
              d="M39.8611 19.9998C39.8611 9.03079 30.969 0.138672 20 0.138672C9.03104 0.138672 0.138916 9.03079 0.138916 19.9998C0.138916 30.9688 9.03104 39.8609 20 39.8609C30.969 39.8609 39.8611 30.9688 39.8611 19.9998Z"
              stroke="url(#paint0_linear_494_612)"
              strokeOpacity="0.2"
              strokeWidth="0.277778"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.2207 11.9367C12.9907 12.5624 13.2794 12.5149 14.7257 12.418L28.3582 11.5992C28.6475 11.5992 28.4069 11.3111 28.3107 11.263L26.0469 9.62611C25.6132 9.28923 25.035 8.90361 23.9275 8.99986L10.7275 9.96236C10.2463 10.0099 10.15 10.2505 10.3419 10.4436L12.2207 11.9367Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.0387 15.114V29.4577C13.0387 30.2283 13.4237 30.5171 14.2912 30.4696L29.2731 29.6027C30.1406 29.5552 30.2374 29.0246 30.2374 28.3983V14.1508C30.2374 13.5258 29.9968 13.1883 29.4662 13.2365L13.8099 14.1508C13.2318 14.199 13.0387 14.4883 13.0387 15.114Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.2206 11.9369C12.9906 12.5625 13.2794 12.515 14.7256 12.4181L28.3581 11.5994C28.6475 11.5994 28.4069 11.3113 28.3106 11.2631L26.0469 9.62627C25.6131 9.2894 25.035 8.90377 23.9275 9.00002L10.7275 9.96252C10.2462 10.01 10.15 10.2506 10.3419 10.4438L12.2206 11.9369ZM13.0387 15.1138V29.4575C13.0387 30.2281 13.4237 30.5169 14.2912 30.4694L29.2731 29.6025C30.1406 29.555 30.2375 29.0244 30.2375 28.3981V14.1506C30.2375 13.5256 29.9969 13.1881 29.4662 13.2363L13.81 14.1506C13.2319 14.1988 13.0387 14.4881 13.0387 15.1138ZM27.8287 15.8831C27.925 16.3169 27.8287 16.75 27.3944 16.7988L26.6725 16.9425V27.5319C26.0456 27.8688 25.4675 28.0613 24.9862 28.0613C24.215 28.0613 24.0219 27.8206 23.4444 27.0988L18.7225 19.6863V26.8581L20.2169 27.195C20.2169 27.195 20.2169 28.0613 19.0112 28.0613L15.6881 28.2538C15.5919 28.0613 15.6881 27.58 16.025 27.4838L16.8925 27.2431V17.7613L15.6881 17.665C15.5912 17.2313 15.8319 16.6063 16.5069 16.5575L20.0719 16.3169L24.9856 23.8263V17.1831L23.7325 17.0394C23.6362 16.5094 24.0212 16.1244 24.5031 16.0769L27.8287 15.8831ZM9.61812 8.66377L23.3481 7.65252C25.0344 7.50815 25.4681 7.60502 26.5275 8.3744L30.9106 11.455C31.6337 11.985 31.875 12.1294 31.875 12.7063V29.6013C31.875 30.66 31.4894 31.2863 30.1406 31.3819L14.1956 32.345C13.1831 32.3931 12.7012 32.2488 12.1712 31.575L8.94375 27.3875C8.36562 26.6169 8.125 26.04 8.125 25.3656V10.3475C8.125 9.4819 8.51062 8.7594 9.61812 8.66377Z"
              fill="#424242"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_494_612"
              x1="20"
              y1="-0.000217015"
              x2="20"
              y2="49.9998"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_494_612">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </motion.svg>

        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="35px"
          height="35px"
          className="rounded-full z-10 absolute left-[18.5rem] -top-[0.4rem]"
          variants={variantRight}
          whileHover="hover"
        >
          <g clipPath="url(#clip0_494_617)">
            <path
              d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z"
              fill="#272334"
            />
            <path
              d="M23.9167 12.0002C23.9167 5.41877 18.5814 0.0834961 12 0.0834961C5.41865 0.0834961 0.083374 5.41877 0.083374 12.0002C0.083374 18.5816 5.41865 23.9168 12 23.9168C18.5814 23.9168 23.9167 18.5816 23.9167 12.0002Z"
              stroke="url(#paint0_linear_494_617)"
              strokeOpacity="0.2"
              strokeWidth="0.166667"
            />
          </g>
          <circle cx="12.1875" cy="11.8125" r="8.0625" fill="#FFDF1A" />
          <path
            d="M14.8526 11.6708C14.9406 11.6601 15.024 11.6588 15.1013 11.6708C15.1453 11.5681 15.1533 11.3914 15.114 11.1988C15.054 10.9128 14.9733 10.7401 14.8066 10.7681C14.6393 10.7948 14.6326 11.0014 14.6933 11.2874C14.7266 11.4474 14.7866 11.5848 14.8526 11.6708ZM13.42 11.8968C13.54 11.9488 13.6133 11.9828 13.6406 11.9541C13.66 11.9354 13.6546 11.8981 13.626 11.8514C13.5488 11.7409 13.4414 11.655 13.3166 11.6041C13.1833 11.5486 13.0379 11.5284 12.8945 11.5454C12.7511 11.5625 12.6145 11.6162 12.498 11.7014C12.4186 11.7601 12.3433 11.8408 12.3526 11.8901C12.3573 11.9054 12.368 11.9181 12.396 11.9234C12.462 11.9308 12.692 11.8141 12.958 11.7981C13.146 11.7848 13.3 11.8434 13.42 11.8968ZM13.1793 12.0334C13.0246 12.0581 12.9386 12.1088 12.884 12.1581C12.8366 12.1994 12.8086 12.2434 12.8086 12.2761L12.8206 12.3041L12.8453 12.3134C12.8806 12.3134 12.9593 12.2828 12.9593 12.2828C13.1753 12.2061 13.3186 12.2148 13.4606 12.2308C13.5386 12.2401 13.5753 12.2441 13.5926 12.2174C13.5973 12.2094 13.6046 12.1941 13.588 12.1681C13.5506 12.1074 13.394 12.0081 13.1793 12.0334ZM14.3686 12.5374C14.4746 12.5894 14.5906 12.5681 14.6286 12.4914C14.668 12.4148 14.6126 12.3101 14.5066 12.2588C14.4013 12.2061 14.2846 12.2261 14.2466 12.3028C14.2086 12.3794 14.264 12.4854 14.3686 12.5374ZM15.0473 11.9434C14.962 11.9421 14.8913 12.0354 14.8886 12.1541C14.8866 12.2721 14.9553 12.3681 15.0413 12.3688C15.1273 12.3701 15.198 12.2761 15.2 12.1588C15.202 12.0414 15.134 11.9454 15.0473 11.9434ZM9.28463 14.0654C9.2633 14.0388 9.22796 14.0461 9.19396 14.0554C9.16996 14.0601 9.1433 14.0668 9.11463 14.0661C9.08591 14.0667 9.05747 14.0602 9.0318 14.0473C9.00613 14.0344 8.98399 14.0155 8.9673 13.9921C8.92796 13.9321 8.92996 13.8421 8.97396 13.7401L8.99396 13.6941C9.0633 13.5401 9.1773 13.2814 9.04863 13.0354C9.00657 12.9486 8.94374 12.8735 8.86571 12.8167C8.78768 12.76 8.69686 12.7234 8.6013 12.7101C8.51094 12.6985 8.41914 12.7087 8.33347 12.7396C8.24781 12.7706 8.17073 12.8215 8.10863 12.8881C7.9193 13.0968 7.89063 13.3821 7.92663 13.4834C7.94063 13.5208 7.96196 13.5308 7.97663 13.5328C8.00863 13.5374 8.05596 13.5134 8.08596 13.4328L8.0953 13.4074C8.10863 13.3648 8.1333 13.2848 8.17396 13.2221C8.22409 13.1455 8.30261 13.0919 8.39225 13.0731C8.48189 13.0544 8.57531 13.072 8.65196 13.1221C8.7853 13.2094 8.8353 13.3721 8.77863 13.5274C8.7493 13.6081 8.70196 13.7614 8.71196 13.8874C8.7333 14.1428 8.89196 14.2454 9.03196 14.2581C9.1693 14.2628 9.2653 14.1861 9.28996 14.1294C9.30396 14.0941 9.29196 14.0734 9.28463 14.0654Z"
            fill="black"
          />
          <path
            d="M17.2141 13.5982C17.2081 13.5788 17.1734 13.4542 17.1274 13.3048L17.0314 13.0488C17.2187 12.7668 17.2221 12.5162 17.1974 12.3735C17.1693 12.19 17.0822 12.0206 16.9494 11.8908C16.8014 11.7362 16.4981 11.5762 16.0727 11.4568L15.8494 11.3948C15.8481 11.3848 15.8374 10.8682 15.8287 10.6462C15.8214 10.4862 15.8081 10.2355 15.7301 9.98884C15.6367 9.65417 15.4761 9.36351 15.2741 9.17484C15.8307 8.59884 16.1774 7.96351 16.1767 7.41884C16.1747 6.37151 14.8881 6.05284 13.3021 6.71018L12.9667 6.85284C12.9654 6.85151 12.3594 6.25684 12.3507 6.24951C10.5414 4.67218 4.88939 10.9562 6.69739 12.4822L7.09272 12.8162C6.98593 13.1022 6.94801 13.4094 6.98205 13.7128C7.02539 14.1335 7.24139 14.5355 7.59205 14.8468C7.92539 15.1415 8.36472 15.3295 8.78939 15.3288C9.49272 16.9502 11.0994 17.9435 12.9834 18.0002C15.0047 18.0602 16.7007 17.1115 17.4127 15.4075C17.4587 15.2882 17.6561 14.7495 17.6561 14.2742C17.6554 13.7955 17.3854 13.5975 17.2141 13.5982ZM8.94405 14.8728C8.88247 14.8838 8.81992 14.8885 8.75739 14.8868C8.14672 14.8695 7.48739 14.3202 7.42205 13.6688C7.34939 12.9488 7.71739 12.3942 8.36939 12.2635C8.44672 12.2468 8.54139 12.2382 8.64272 12.2428C9.00805 12.2642 9.54539 12.5442 9.66872 13.3395C9.77805 14.0428 9.60472 14.7608 8.94405 14.8728ZM8.26339 11.8315C7.86702 11.9048 7.51479 12.1295 7.28139 12.4582C7.15005 12.3488 6.90672 12.1382 6.86405 12.0555C6.51472 11.3928 7.24472 10.1035 7.75539 9.37551C9.01472 7.57684 10.9894 6.21618 11.9041 6.46151C12.0521 6.50418 12.5441 7.07551 12.5441 7.07551C12.5441 7.07551 11.6307 7.58151 10.7827 8.28817C9.64205 9.16817 8.77872 10.4455 8.26339 11.8315ZM14.6707 14.6035C14.6776 14.6006 14.6833 14.5955 14.6869 14.589C14.6906 14.5824 14.6919 14.5749 14.6907 14.5675C14.6903 14.5631 14.689 14.5587 14.6869 14.5548C14.6848 14.5509 14.6819 14.5474 14.6784 14.5446C14.6749 14.5418 14.6709 14.5397 14.6666 14.5385C14.6623 14.5373 14.6578 14.537 14.6534 14.5375C14.6534 14.5375 13.6974 14.6788 12.7941 14.3488C12.8921 14.0295 13.1547 14.1435 13.5501 14.1762C14.1646 14.2124 14.7808 14.1457 15.3734 13.9788C15.7821 13.8608 16.3194 13.6295 16.7367 13.3002C16.8781 13.6102 16.9274 13.9502 16.9274 13.9502C16.9274 13.9502 17.0361 13.9308 17.1274 13.9868C17.2141 14.0402 17.2767 14.1502 17.2341 14.4342C17.1454 14.9662 16.9201 15.3975 16.5394 15.7948C16.3025 16.0519 16.0202 16.263 15.7067 16.4175C15.5325 16.5093 15.351 16.5864 15.1641 16.6482C13.7314 17.1155 12.2647 16.6015 11.7921 15.4968C11.754 15.4122 11.7223 15.3249 11.6974 15.2355C11.4961 14.5075 11.6667 13.6355 12.2007 13.0848C12.2347 13.0502 12.2687 13.0088 12.2687 12.9568C12.2687 12.9142 12.2407 12.8682 12.2174 12.8348C12.0307 12.5642 11.3821 12.1022 11.5127 11.2082C11.6054 10.5655 12.1674 10.1135 12.6914 10.1402L12.8247 10.1482C13.0514 10.1615 13.2494 10.1902 13.4361 10.1988C13.7494 10.2115 14.0301 10.1662 14.3634 9.88884C14.4761 9.79417 14.5661 9.71351 14.7181 9.68817C14.7341 9.68417 14.7741 9.67151 14.8534 9.67417C14.9347 9.67745 15.0137 9.70255 15.0821 9.74684C15.3487 9.92417 15.3867 10.3548 15.4014 10.6702C15.4094 10.8495 15.4314 11.2848 15.4381 11.4088C15.4554 11.6942 15.5307 11.7348 15.6814 11.7842C15.7674 11.8135 15.8467 11.8335 15.9634 11.8675C16.3161 11.9655 16.5267 12.0675 16.6587 12.1962C16.7271 12.2624 16.7713 12.3498 16.7841 12.4442C16.8274 12.7488 16.5487 13.1248 15.8141 13.4662C15.0101 13.8388 14.0347 13.9335 13.3614 13.8582L13.1254 13.8315C12.5854 13.7595 12.2794 14.4555 12.6027 14.9322C12.8114 15.2395 13.3787 15.4395 13.9474 15.4395C15.2494 15.4408 16.2507 14.8848 16.6241 14.4035L16.6534 14.3615C16.6707 14.3335 16.6567 14.3195 16.6334 14.3342C16.3301 14.5422 14.9781 15.3688 13.5327 15.1208C13.5327 15.1208 13.3567 15.0915 13.1967 15.0288C13.0701 14.9808 12.8027 14.8568 12.7707 14.5835C13.9354 14.9455 14.6707 14.6042 14.6707 14.6035ZM10.5907 9.36884C11.0387 8.85151 11.5901 8.40084 12.0847 8.14884C12.1014 8.13951 12.1194 8.15884 12.1101 8.17417C12.0494 8.28059 12.0028 8.39443 11.9714 8.51284C11.9674 8.53084 11.9867 8.54551 12.0021 8.53417C12.3101 8.32484 12.8447 8.10017 13.3141 8.07217C13.3186 8.07139 13.3233 8.07221 13.3273 8.07451C13.3314 8.0768 13.3345 8.08042 13.3361 8.08475C13.3378 8.08908 13.3379 8.09385 13.3364 8.09824C13.3349 8.10264 13.332 8.10638 13.3281 8.10884C13.2503 8.1685 13.1808 8.23822 13.1214 8.31617C13.1121 8.32951 13.1207 8.34884 13.1374 8.34884C13.4667 8.35084 13.9314 8.46551 14.2334 8.63551C14.2534 8.64751 14.2387 8.68684 14.2167 8.68151C13.7581 8.57684 13.0094 8.49684 12.2307 8.68684C11.5347 8.85617 11.0041 9.11751 10.6181 9.39951C10.5981 9.41284 10.5747 9.38684 10.5907 9.36884Z"
            fill="black"
          />
          <defs>
            <linearGradient
              id="paint0_linear_494_617"
              x1="12"
              y1="0.000162756"
              x2="12"
              y2="30.0002"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_494_617">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </motion.svg>
      </motion.div>
    </div>
  );
};

const LOOP_DURATION = 4;

const Ping = () => {
  return (
    <div className="relative">
      <Logo />
      <Band delay={0} />
      <Band delay={LOOP_DURATION * 0.25} />
      <Band delay={LOOP_DURATION * 0.5} />
      <Band delay={LOOP_DURATION * 0.75} />
    </div>
  );
};

const Logo = () => {
  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative z-10"
      initial={{
        opacity: 0,
        scale: 0.85,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 48C37.255 48 48 37.255 48 24C48 10.745 37.255 0 24 0C10.745 0 0 10.745 0 24C0 37.255 10.745 48 24 48ZM23.5 11C22.837 11 22.2011 11.2634 21.7322 11.7322C21.2634 12.2011 21 12.837 21 13.5V22H13.5C12.837 22 12.2011 22.2634 11.7322 22.7322C11.2634 23.2011 11 23.837 11 24.5C11 25.163 11.2634 25.7989 11.7322 26.2678C12.2011 26.7366 12.837 27 13.5 27H21V34.5C21 35.163 21.2634 35.7989 21.7322 36.2678C22.2011 36.7366 22.837 37 23.5 37C24.163 37 24.7989 36.7366 25.2678 36.2678C25.7366 35.7989 26 35.163 26 34.5V27H34.5C35.163 27 35.7989 26.7366 36.2678 26.2678C36.7366 25.7989 37 25.163 37 24.5C37 23.837 36.7366 23.2011 36.2678 22.7322C35.7989 22.2634 35.163 22 34.5 22H26V13.5C26 12.837 25.7366 12.2011 25.2678 11.7322C24.7989 11.2634 24.163 11 23.5 11Z"
        fill="url(#paint0_linear_446_838)"
        fillOpacity="0.8"
      />
      <path
        d="M47.5 24C47.5 36.979 36.979 47.5 24 47.5C11.021 47.5 0.5 36.979 0.5 24C0.5 11.021 11.021 0.5 24 0.5C36.979 0.5 47.5 11.021 47.5 24ZM23.5 10.5C22.7044 10.5 21.9413 10.8161 21.3787 11.3787C20.8161 11.9413 20.5 12.7044 20.5 13.5V21.5H13.5C12.7044 21.5 11.9413 21.8161 11.3787 22.3787C10.8161 22.9413 10.5 23.7044 10.5 24.5C10.5 25.2956 10.8161 26.0587 11.3787 26.6213C11.9413 27.1839 12.7044 27.5 13.5 27.5H20.5V34.5C20.5 34.894 20.5776 35.2841 20.7284 35.6481C20.8791 36.012 21.1001 36.3427 21.3787 36.6213C21.6573 36.8999 21.988 37.1209 22.3519 37.2716C22.7159 37.4224 23.106 37.5 23.5 37.5C23.894 37.5 24.2841 37.4224 24.6481 37.2716C25.012 37.1209 25.3427 36.8999 25.6213 36.6213C25.8999 36.3427 26.1209 36.012 26.2716 35.6481C26.4224 35.2841 26.5 34.894 26.5 34.5V27.5H34.5C35.2956 27.5 36.0587 27.1839 36.6213 26.6213C37.1839 26.0587 37.5 25.2956 37.5 24.5C37.5 23.7044 37.1839 22.9413 36.6213 22.3787C36.0587 21.8161 35.2956 21.5 34.5 21.5H26.5V13.5C26.5 12.7044 26.1839 11.9413 25.6213 11.3787C25.0587 10.8161 24.2956 10.5 23.5 10.5Z"
        stroke="url(#paint1_linear_446_838)"
        strokeOpacity="0.2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_446_838"
          x1="24"
          y1="0"
          x2="24"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="1" stopColor="#6E78F2" />
          <stop offset="1" stopColor="#6E78F2" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_446_838"
          x1="24"
          y1="-4.75569e-09"
          x2="24"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

const Band = ({ delay }: { delay: number }) => {
  return (
    <motion.span
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{
        opacity: 0,
        scale: 0.25,
      }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: 1,
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.35, 0.75, 1],
        duration: LOOP_DURATION,
        ease: "linear",
        delay,
      }}
      className="absolute left-[50%] top-[50%] z-0 h-72 w-72 rounded-full border-[2px] border-gray-400/60 bg-gradient-to-br from-[#757dee90] to-violet-800/20 shadow-xl shadow-[#5661F6]"
    />
  );
};
