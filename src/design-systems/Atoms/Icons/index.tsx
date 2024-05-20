import { IconProps } from './interface'

const CartIcon: React.FC<IconProps> = ({ className, width = '25', height = '25', ...props }) => {
  return (
    <svg
      className={`h-5 w-5 dark:text-white ${className} `}
      height={height}
      viewBox="0 0 24 24"
      width={width}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M10 20C10 21.6569 8.65685 23 7 23C5.34315 23 4 21.6569 4 20C4 18.3431 5.34315 17 7 17C8.65685 17 10 18.3431 10 20ZM8 20C8 20.5523 7.55228 21 7 21C6.44772 21 6 20.5523 6 20C6 19.4477 6.44772 19 7 19C7.55228 19 8 19.4477 8 20Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M20 20C20 21.6569 18.6569 23 17 23C15.3431 23 14 21.6569 14 20C14 18.3431 15.3431 17 17 17C18.6569 17 20 18.3431 20 20ZM18 20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20C16 19.4477 16.4477 19 17 19C17.5523 19 18 19.4477 18 20Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M2.10555 2.55276C2.35254 2.05878 2.95321 1.85856 3.44719 2.10555L4.4507 2.6073C5.37996 3.07193 6.00267 3.98429 6.09674 5.01898L6.14458 5.54524C6.16799 5.80278 6.38392 5.99997 6.64252 5.99997H19.8355C21.581 5.99997 22.7892 7.74341 22.1763 9.37778L20.423 14.0533C19.9839 15.2243 18.8645 16 17.614 16H7.8264C6.27479 16 4.9792 14.8168 4.83872 13.2716L4.10495 5.20005C4.07359 4.85515 3.86602 4.55103 3.55627 4.39616L2.55276 3.8944C2.05878 3.64741 1.85856 3.04674 2.10555 2.55276ZM6.91525 7.99997C6.62124 7.99997 6.39069 8.25243 6.4173 8.54524L6.83051 13.0905C6.87734 13.6056 7.3092 14 7.8264 14H17.614C18.0308 14 18.4039 13.7414 18.5503 13.3511L20.3036 8.67554C20.4262 8.34866 20.1846 7.99997 19.8355 7.99997H6.91525Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export const MyItemIcon: React.FC<IconProps> = ({ className, width = '25', height = '25', ...props }) => {
  return (
    <svg
      className={`h-5 w-5 dark:text-white ${className} `}
      height={height}
      viewBox="0 0 24 24"
      width={width}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 8.00007V4.50073C16 3.66899 16 3.25312 15.8248 2.99755C15.6717 2.77425 15.4346 2.62257 15.1678 2.57715C14.8623 2.52517 14.4847 2.69944 13.7295 3.04799L4.85901 7.14206C4.18551 7.45291 3.84875 7.60834 3.60211 7.84939C3.38406 8.06249 3.21762 8.32262 3.1155 8.6099C3 8.93486 3 9.30575 3 10.0475V15.0001M16.5 14.5001H16.51M3 11.2001L3 17.8001C3 18.9202 3 19.4802 3.21799 19.9081C3.40973 20.2844 3.71569 20.5903 4.09202 20.7821C4.51984 21.0001 5.07989 21.0001 6.2 21.0001H17.8C18.9201 21.0001 19.4802 21.0001 19.908 20.7821C20.2843 20.5903 20.5903 20.2844 20.782 19.9081C21 19.4802 21 18.9202 21 17.8001V11.2001C21 10.08 21 9.51992 20.782 9.09209C20.5903 8.71577 20.2843 8.40981 19.908 8.21806C19.4802 8.00007 18.9201 8.00007 17.8 8.00007L6.2 8.00007C5.0799 8.00007 4.51984 8.00007 4.09202 8.21806C3.7157 8.40981 3.40973 8.71577 3.21799 9.09209C3 9.51991 3 10.08 3 11.2001ZM17 14.5001C17 14.7762 16.7761 15.0001 16.5 15.0001C16.2239 15.0001 16 14.7762 16 14.5001C16 14.2239 16.2239 14.0001 16.5 14.0001C16.7761 14.0001 17 14.2239 17 14.5001Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

export const ExploreIcon: React.FC<IconProps> = ({ className, width = '25', height = '25', ...props }) => {
  return (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`h-5 w-5 dark:text-white ${className} `}
    >
      <path d="M9.75351 10.0095L10.5441 10.273L9.75351 10.0095ZM9.8626 9.74299L9.17479 9.2725L9.8626 9.74299ZM10.2595 9.50351L9.99595 8.71294L10.2595 9.50351ZM9.99299 9.6126L9.5225 8.92479L9.99299 9.6126ZM9.27789 15.484L9.54142 16.2746L9.27789 15.484ZM8.38263 15.6704L8.66253 14.8855L8.38263 15.6704ZM8.26596 14.4721L7.4754 14.2086L8.26596 14.4721ZM8.07962 15.3674L8.86454 15.0875L8.07962 15.3674ZM14.2465 13.4905L15.0371 13.754L14.2465 13.4905ZM14.1374 13.757L14.8252 14.2275L14.1374 13.757ZM13.7405 13.9965L13.477 13.2059L13.7405 13.9965ZM14.007 13.8874L14.4775 14.5752L14.007 13.8874ZM15.734 9.02789L14.9435 8.76437L15.734 9.02789ZM15.9204 8.13263L15.1355 8.41253L15.9204 8.13263ZM14.7221 8.01596L14.4586 7.2254L14.7221 8.01596ZM15.6174 7.82962L15.3375 8.61454L15.6174 7.82962ZM21.1667 11.75C21.1667 16.8126 17.0626 20.9167 12 20.9167V22.5833C17.9831 22.5833 22.8333 17.7331 22.8333 11.75H21.1667ZM12 20.9167C6.93739 20.9167 2.83333 16.8126 2.83333 11.75H1.16667C1.16667 17.7331 6.01692 22.5833 12 22.5833V20.9167ZM2.83333 11.75C2.83333 6.68739 6.93739 2.58333 12 2.58333V0.916667C6.01691 0.916667 1.16667 5.76691 1.16667 11.75H2.83333ZM12 2.58333C17.0626 2.58333 21.1667 6.68739 21.1667 11.75H22.8333C22.8333 5.76692 17.9831 0.916667 12 0.916667V2.58333ZM14.9435 8.76437L13.4559 13.227L15.0371 13.754L16.5246 9.29142L14.9435 8.76437ZM13.477 13.2059L9.01437 14.6935L9.54142 16.2746L14.004 14.7871L13.477 13.2059ZM9.05653 14.7356L10.5441 10.273L8.96294 9.74595L7.4754 14.2086L9.05653 14.7356ZM10.523 10.2941L14.9856 8.80653L14.4586 7.2254L9.99595 8.71294L10.523 10.2941ZM10.5441 10.273C10.5561 10.237 10.5647 10.2111 10.5723 10.1891C10.5799 10.1672 10.584 10.1562 10.586 10.1509C10.5879 10.1461 10.5859 10.152 10.5799 10.1637C10.5735 10.1766 10.5637 10.194 10.5504 10.2135L9.17479 9.2725C9.05392 9.44919 8.99404 9.65264 8.96294 9.74595L10.5441 10.273ZM9.99595 8.71294C9.90264 8.74404 9.69919 8.80392 9.5225 8.92479L10.4635 10.3004C10.444 10.3137 10.4266 10.3235 10.4137 10.3299C10.402 10.3359 10.3961 10.3379 10.4009 10.336C10.4062 10.334 10.4172 10.3299 10.4391 10.3223C10.4611 10.3147 10.487 10.3061 10.523 10.2941L9.99595 8.71294ZM10.5504 10.2135C10.5271 10.2476 10.4976 10.2771 10.4635 10.3004L9.5225 8.92479C9.38604 9.01813 9.26813 9.13604 9.17479 9.2725L10.5504 10.2135ZM9.01437 14.6935C8.89026 14.7348 8.79064 14.768 8.70457 14.7951C8.61794 14.8224 8.5591 14.839 8.51735 14.8488C8.47407 14.8589 8.47032 14.8566 8.49064 14.8559C8.51495 14.8549 8.57968 14.8559 8.66253 14.8855L8.10273 16.4553C8.42101 16.5688 8.72267 16.5126 8.8986 16.4712C9.08689 16.427 9.3129 16.3508 9.54142 16.2746L9.01437 14.6935ZM7.4754 14.2086C7.39922 14.4371 7.32301 14.6631 7.27876 14.8514C7.23742 15.0273 7.1812 15.329 7.2947 15.6473L8.86454 15.0875C8.89408 15.1703 8.89505 15.2351 8.89413 15.2594C8.89335 15.2797 8.89107 15.2759 8.90124 15.2327C8.91105 15.1909 8.92763 15.1321 8.95489 15.0454C8.98198 14.9594 9.01516 14.8597 9.05653 14.7356L7.4754 14.2086ZM8.66253 14.8855C8.75677 14.9191 8.83093 14.9932 8.86454 15.0875L7.2947 15.6473C7.42912 16.0242 7.72577 16.3209 8.10273 16.4553L8.66253 14.8855ZM13.4559 13.227C13.4439 13.263 13.4353 13.2889 13.4277 13.3109C13.4201 13.3328 13.416 13.3438 13.414 13.3491C13.4121 13.3539 13.4141 13.348 13.4201 13.3363C13.4265 13.3234 13.4363 13.306 13.4496 13.2865L14.8252 14.2275C14.9461 14.0508 15.006 13.8474 15.0371 13.754L13.4559 13.227ZM14.004 14.7871C14.0974 14.756 14.3008 14.6961 14.4775 14.5752L13.5365 13.1996C13.556 13.1863 13.5734 13.1765 13.5863 13.1701C13.598 13.1641 13.6039 13.1621 13.5991 13.164C13.5938 13.166 13.5828 13.1701 13.5609 13.1777C13.5389 13.1853 13.513 13.1939 13.477 13.2059L14.004 14.7871ZM13.4496 13.2865C13.4729 13.2524 13.5024 13.2229 13.5365 13.1996L14.4775 14.5752C14.614 14.4819 14.7319 14.364 14.8252 14.2275L13.4496 13.2865ZM16.5246 9.29142C16.6008 9.0629 16.677 8.83689 16.7212 8.6486C16.7626 8.47267 16.8188 8.17101 16.7053 7.85273L15.1355 8.41253C15.1059 8.32968 15.1049 8.26495 15.1059 8.24064C15.1066 8.22032 15.1089 8.22407 15.0988 8.26735C15.089 8.3091 15.0724 8.36794 15.0451 8.45457C15.018 8.54064 14.9848 8.64025 14.9435 8.76437L16.5246 9.29142ZM14.9856 8.80653C15.1097 8.76516 15.2094 8.73198 15.2954 8.70489C15.3821 8.67763 15.4409 8.66105 15.4827 8.65124C15.5259 8.64107 15.5297 8.64335 15.5094 8.64413C15.4851 8.64505 15.4203 8.64408 15.3375 8.61454L15.8973 7.0447C15.579 6.9312 15.2773 6.98742 15.1014 7.02876C14.9131 7.07301 14.6871 7.14922 14.4586 7.2254L14.9856 8.80653ZM16.7053 7.85273C16.5709 7.47577 16.2742 7.17912 15.8973 7.0447L15.3375 8.61454C15.2432 8.58093 15.1691 8.50677 15.1355 8.41253L16.7053 7.85273Z" />
    </svg>
  )
}

export const BellIcon: React.FC<IconProps> = ({ className, width = '25', height = '25', ...props }) => {
  return (
    <svg
      className={`h-5 w-5 dark:text-white ${className} `}
      height={height}
      viewBox="0 0 24 24"
      width={width}
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.35419 20C8.05933 20.6224 8.98557 21 10 21C11.0145 21 11.9407 20.6224 12.6458 20M16 7C16 5.4087 15.3679 3.88258 14.2427 2.75736C13.1174 1.63214 11.5913 1 10 1C8.40872 1 6.8826 1.63214 5.75738 2.75736C4.63216 3.88258 4.00002 5.4087 4.00002 7C4.00002 10.0902 3.22049 12.206 2.34968 13.6054C1.61515 14.7859 1.24788 15.3761 1.26134 15.5408C1.27626 15.7231 1.31488 15.7926 1.46179 15.9016C1.59448 16 2.19261 16 3.38887 16H16.6112C17.8074 16 18.4056 16 18.5382 15.9016C18.6852 15.7926 18.7238 15.7231 18.7387 15.5408C18.7522 15.3761 18.3849 14.7859 17.6504 13.6054C16.7795 12.206 16 10.0902 16 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const NotificationIcon: React.FC<IconProps> = ({ className, width = '25', height = '25', ...props }) => {
  return (
    <svg
      className={`h-5 w-5 dark:text-white ${className} `}
      height={height}
      viewBox="0 0 24 24"
      width={width}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M7.5 2.50016H12.5C12.9602 2.50016 13.3333 2.87326 13.3333 3.3335C13.3333 3.79373 12.9602 4.16683 12.5 4.16683H7.5C7.03976 4.16683 6.66667 3.79373 6.66667 3.3335C6.66667 2.87326 7.03976 2.50016 7.5 2.50016ZM5.11635 2.57746C5.43678 1.5663 6.38281 0.833496 7.5 0.833496H12.5C13.6172 0.833496 14.5632 1.5663 14.8836 2.57747C16.38 2.90546 17.5 4.23868 17.5 5.8335V15.8335C17.5 17.6744 16.0076 19.1668 14.1667 19.1668H5.83333C3.99238 19.1668 2.5 17.6744 2.5 15.8335V5.8335C2.5 4.23868 3.62 2.90546 5.11635 2.57746ZM5.19154 4.29488C4.58965 4.54624 4.16667 5.14047 4.16667 5.8335V15.8335C4.16667 16.754 4.91286 17.5002 5.83333 17.5002H14.1667C15.0871 17.5002 15.8333 16.754 15.8333 15.8335V5.8335C15.8333 5.14047 15.4103 4.54624 14.8085 4.29489C14.4317 5.19841 13.54 5.8335 12.5 5.8335H7.5C6.45996 5.8335 5.56826 5.19841 5.19154 4.29488ZM6.66667 9.16683C7.1269 9.16683 7.5 8.79373 7.5 8.3335C7.5 7.87326 7.1269 7.50016 6.66667 7.50016C6.20643 7.50016 5.83333 7.87326 5.83333 8.3335C5.83333 8.79373 6.20643 9.16683 6.66667 9.16683ZM10 7.50016C9.53976 7.50016 9.16667 7.87326 9.16667 8.3335C9.16667 8.79373 9.53976 9.16683 10 9.16683H13.3333C13.7936 9.16683 14.1667 8.79373 14.1667 8.3335C14.1667 7.87326 13.7936 7.50016 13.3333 7.50016H10ZM9.16667 11.6668C9.16667 11.2066 9.53976 10.8335 10 10.8335H13.3333C13.7936 10.8335 14.1667 11.2066 14.1667 11.6668C14.1667 12.1271 13.7936 12.5002 13.3333 12.5002H10C9.53976 12.5002 9.16667 12.1271 9.16667 11.6668ZM9.16667 15.0002C9.16667 14.5399 9.53976 14.1668 10 14.1668H11.6667C12.1269 14.1668 12.5 14.5399 12.5 15.0002C12.5 15.4604 12.1269 15.8335 11.6667 15.8335H10C9.53976 15.8335 9.16667 15.4604 9.16667 15.0002ZM6.66667 12.5002C7.1269 12.5002 7.5 12.1271 7.5 11.6668C7.5 11.2066 7.1269 10.8335 6.66667 10.8335C6.20643 10.8335 5.83333 11.2066 5.83333 11.6668C5.83333 12.1271 6.20643 12.5002 6.66667 12.5002ZM6.66667 15.8335C7.1269 15.8335 7.5 15.4604 7.5 15.0002C7.5 14.5399 7.1269 14.1668 6.66667 14.1668C6.20643 14.1668 5.83333 14.5399 5.83333 15.0002C5.83333 15.4604 6.20643 15.8335 6.66667 15.8335Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export const ListingIcon: React.FC<IconProps> = ({ className, width = '25', height = '25', ...props }) => {
  return (
    <svg
      className={`h-5 w-5 dark:text-white ${className} `}
      height={height}
      viewBox="0 0 24 24"
      width={width}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M10.4142 3.17157C11.1643 2.42143 12.1817 2 13.2426 2H18.9999C20.6568 2 21.9999 3.34315 21.9999 5V10.7574C21.9999 11.8182 21.5785 12.8356 20.8284 13.5858L13.1213 21.2929C11.9497 22.4645 10.0502 22.4645 8.87862 21.2929L2.70705 15.1213C1.53547 13.9497 1.53548 12.0503 2.70705 10.8787L3.58576 9.99997L3.58569 9.99991L4.99991 8.58569L4.99997 8.58576L10.4142 3.17157ZM4.12126 12.2929L4.99997 11.4142L12.5858 19L11.7071 19.8787C11.3165 20.2692 10.6834 20.2692 10.2928 19.8787L4.12126 13.7071C3.73074 13.3166 3.73074 12.6834 4.12126 12.2929ZM19.4142 12.1716L14 17.5858L6.41419 9.99997L11.8284 4.58579C12.2034 4.21071 12.7122 4 13.2426 4H18.9999C19.5522 4 19.9999 4.44772 19.9999 5V10.7574C19.9999 11.2878 19.7892 11.7965 19.4142 12.1716ZM16 9C16 9.55228 15.5523 10 15 10C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9ZM18 9C18 10.6569 16.6569 12 15 12C13.3431 12 12 10.6569 12 9C12 7.34315 13.3431 6 15 6C16.6569 6 18 7.34315 18 9Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export const LogoutIcon: React.FC<IconProps> = ({ className, width = '25', height = '25', ...props }) => {
  return (
    <svg
      className={`h-5 w-5 dark:text-white ${className} `}
      height={height}
      viewBox="0 0 24 24"
      width={width}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M8.33333 6.66658V4.99992C8.33333 4.55789 8.50893 4.13397 8.82149 3.82141C9.13405 3.50885 9.55797 3.33325 10 3.33325H15.8333C16.2754 3.33325 16.6993 3.50885 17.0118 3.82141C17.3244 4.13397 17.5 4.55789 17.5 4.99992V14.9999C17.5 15.4419 17.3244 15.8659 17.0118 16.1784C16.6993 16.491 16.2754 16.6666 15.8333 16.6666H10C9.55797 16.6666 9.13405 16.491 8.82149 16.1784C8.50893 15.8659 8.33333 15.4419 8.33333 14.9999V13.3333"
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M14.1667 10H2.49999M2.49999 10L4.99999 7.5M2.49999 10L4.99999 12.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export const CircleIcon: React.FC<IconProps> = ({ className = 'stroke-neutral-100', ...props }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.25 3.81567C18.1168 4.67133 19.6349 6.13967 20.5522 7.97696C21.4695 9.81426 21.7309 11.91 21.293 13.9163C20.8551 15.9227 19.7443 17.7189 18.1448 19.0069C16.5454 20.2949 14.5536 20.9972 12.5 20.9972C10.4464 20.9972 8.45464 20.2949 6.8552 19.0069C5.25577 17.7189 4.14491 15.9227 3.70701 13.9163C3.26911 11.91 3.53051 9.81426 4.44783 7.97696C5.36514 6.13967 6.8832 4.67133 8.75001 3.81567"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

export const FilterIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg className={`h-5 w-5 dark:text-white ${className} `} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        clipRule="evenodd"
        d="M14 7.5C13.3096 7.5 12.75 8.05964 12.75 8.75C12.75 9.44036 13.3096 10 14 10C14.6904 10 15.25 9.44036 15.25 8.75C15.25 8.05964 14.6904 7.5 14 7.5ZM11.3535 8C11.68 6.84575 12.7412 6 14 6C15.2588 6 16.32 6.84575 16.6465 8H18C18.4142 8 18.75 8.33579 18.75 8.75C18.75 9.16421 18.4142 9.5 18 9.5H16.6465C16.32 10.6543 15.2588 11.5 14 11.5C12.7412 11.5 11.68 10.6543 11.3535 9.5H6C5.58579 9.5 5.25 9.16421 5.25 8.75C5.25 8.33579 5.58579 8 6 8H11.3535ZM10 14C9.30964 14 8.75 14.5596 8.75 15.25C8.75 15.9404 9.30964 16.5 10 16.5C10.6904 16.5 11.25 15.9404 11.25 15.25C11.25 14.5596 10.6904 14 10 14ZM7.35352 14.5C7.67998 13.3457 8.74122 12.5 10 12.5C11.2588 12.5 12.32 13.3457 12.6465 14.5H18C18.4142 14.5 18.75 14.8358 18.75 15.25C18.75 15.6642 18.4142 16 18 16H12.6465C12.32 17.1543 11.2588 18 10 18C8.74122 18 7.67998 17.1543 7.35352 16H6C5.58579 16 5.25 15.6642 5.25 15.25C5.25 14.8358 5.58579 14.5 6 14.5H7.35352Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export const GridViewIcon: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      className={`h-5 w-5 dark:text-white ${className} `}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M14.5834 3.33341C14.2066 3.33341 13.6742 3.3855 13.1199 3.46141C12.861 3.49687 12.6635 3.69432 12.6281 3.95326C12.5522 4.50752 12.5001 5.03993 12.5001 5.41675C12.5001 5.79357 12.5522 6.32598 12.6281 6.88024C12.6635 7.13918 12.861 7.33662 13.1199 7.37209C13.6742 7.44799 14.2066 7.50008 14.5834 7.50008C14.9602 7.50008 15.4926 7.44799 16.0469 7.37209C16.3058 7.33662 16.5033 7.13918 16.5388 6.88024C16.6147 6.32598 16.6667 5.79357 16.6667 5.41675C16.6667 5.03993 16.6147 4.50752 16.5388 3.95326C16.5033 3.69432 16.3058 3.49687 16.0469 3.46141C15.4926 3.3855 14.9602 3.33341 14.5834 3.33341ZM12.8938 1.81016C11.8939 1.9471 11.1138 2.72719 10.9768 3.72711C10.8983 4.30062 10.8334 4.92355 10.8334 5.41675C10.8334 5.90995 10.8983 6.53288 10.9768 7.10639C11.1138 8.1063 11.8939 8.8864 12.8938 9.02334C13.4673 9.10188 14.0902 9.16675 14.5834 9.16675C15.0766 9.16675 15.6995 9.10188 16.2731 9.02334C17.273 8.8864 18.0531 8.1063 18.19 7.10639C18.2685 6.53288 18.3334 5.90995 18.3334 5.41675C18.3334 4.92355 18.2685 4.30062 18.19 3.72711C18.0531 2.72719 17.273 1.9471 16.2731 1.81016C15.6995 1.73161 15.0766 1.66675 14.5834 1.66675C14.0902 1.66675 13.4673 1.73161 12.8938 1.81016ZM3.95326 12.6281C4.50752 12.5522 5.03993 12.5001 5.41675 12.5001C5.79357 12.5001 6.32598 12.5522 6.88024 12.6281C7.13918 12.6635 7.33662 12.861 7.37209 13.1199C7.44799 13.6742 7.50008 14.2066 7.50008 14.5834C7.50008 14.9602 7.44799 15.4926 7.37209 16.0469C7.33662 16.3058 7.13918 16.5033 6.88024 16.5388C6.32598 16.6147 5.79357 16.6667 5.41675 16.6667C5.03993 16.6667 4.50752 16.6147 3.95326 16.5388C3.69432 16.5033 3.49687 16.3058 3.46141 16.0469C3.3855 15.4926 3.33341 14.9602 3.33341 14.5834C3.33341 14.2066 3.3855 13.6742 3.46141 13.1199C3.49687 12.861 3.69432 12.6635 3.95326 12.6281ZM1.81016 12.8938C1.9471 11.8939 2.72719 11.1138 3.72711 10.9768C4.30062 10.8983 4.92355 10.8334 5.41675 10.8334C5.90995 10.8334 6.53288 10.8983 7.10639 10.9768C8.1063 11.1138 8.8864 11.8939 9.02334 12.8938C9.10188 13.4673 9.16675 14.0902 9.16675 14.5834C9.16675 15.0766 9.10188 15.6995 9.02334 16.2731C8.8864 17.273 8.1063 18.0531 7.10639 18.19C6.53288 18.2685 5.90995 18.3334 5.41675 18.3334C4.92355 18.3334 4.30062 18.2685 3.72711 18.19C2.72719 18.0531 1.9471 17.273 1.81016 16.2731C1.73161 15.6995 1.66675 15.0766 1.66675 14.5834C1.66675 14.0902 1.73161 13.4673 1.81016 12.8938ZM13.1199 12.6281C13.6742 12.5522 14.2066 12.5001 14.5834 12.5001C14.9602 12.5001 15.4926 12.5522 16.0469 12.6281C16.3058 12.6635 16.5033 12.861 16.5388 13.1199C16.6147 13.6742 16.6667 14.2066 16.6667 14.5834C16.6667 14.9602 16.6147 15.4926 16.5388 16.0469C16.5033 16.3058 16.3058 16.5033 16.0469 16.5388C15.4926 16.6147 14.9602 16.6667 14.5834 16.6667C14.2066 16.6667 13.6742 16.6147 13.1199 16.5388C12.861 16.5033 12.6635 16.3058 12.6281 16.0469C12.5522 15.4926 12.5001 14.9602 12.5001 14.5834C12.5001 14.2066 12.5522 13.6742 12.6281 13.1199C12.6635 12.861 12.861 12.6635 13.1199 12.6281ZM10.9768 12.8938C11.1138 11.8939 11.8939 11.1138 12.8938 10.9768C13.4673 10.8983 14.0902 10.8334 14.5834 10.8334C15.0766 10.8334 15.6995 10.8983 16.2731 10.9768C17.273 11.1138 18.0531 11.8939 18.19 12.8938C18.2685 13.4673 18.3334 14.0902 18.3334 14.5834C18.3334 15.0766 18.2685 15.6995 18.19 16.2731C18.0531 17.273 17.273 18.0531 16.2731 18.19C15.6995 18.2685 15.0766 18.3334 14.5834 18.3334C14.0902 18.3334 13.4673 18.2685 12.8938 18.19C11.8939 18.0531 11.1138 17.273 10.9768 16.2731C10.8983 15.6995 10.8334 15.0766 10.8334 14.5834C10.8334 14.0902 10.8983 13.4673 10.9768 12.8938ZM3.95326 3.46141C4.50752 3.3855 5.03993 3.33341 5.41675 3.33341C5.79357 3.33341 6.32598 3.3855 6.88024 3.46141C7.13918 3.49687 7.33662 3.69432 7.37209 3.95326C7.44799 4.50752 7.50008 5.03993 7.50008 5.41675C7.50008 5.79357 7.44799 6.32598 7.37209 6.88024C7.33662 7.13918 7.13918 7.33662 6.88024 7.37209C6.32598 7.44799 5.79357 7.50008 5.41675 7.50008C5.03993 7.50008 4.50752 7.44799 3.95326 7.37209C3.69432 7.33662 3.49687 7.13918 3.46141 6.88024C3.3855 6.32598 3.33341 5.79357 3.33341 5.41675C3.33341 5.03993 3.3855 4.50752 3.46141 3.95326C3.49687 3.69432 3.69432 3.49687 3.95326 3.46141ZM1.81016 3.72711C1.9471 2.72719 2.72719 1.9471 3.72711 1.81016C4.30062 1.73161 4.92355 1.66675 5.41675 1.66675C5.90995 1.66675 6.53288 1.73161 7.10639 1.81016C8.1063 1.9471 8.8864 2.72719 9.02334 3.72711C9.10188 4.30062 9.16675 4.92355 9.16675 5.41675C9.16675 5.90995 9.10188 6.53288 9.02334 7.10639C8.8864 8.1063 8.1063 8.8864 7.10639 9.02334C6.53288 9.10188 5.90995 9.16675 5.41675 9.16675C4.92355 9.16675 4.30062 9.10188 3.72711 9.02334C2.72719 8.8864 1.9471 8.1063 1.81016 7.10639C1.73161 6.53288 1.66675 5.90995 1.66675 5.41675C1.66675 4.92355 1.73161 4.30062 1.81016 3.72711Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}
export const ListViewIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg className={`h-5 w-5 dark:text-white ${className} `} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        clipRule="evenodd"
        d="M16.5388 3.95326C16.6147 4.50752 16.6667 5.03993 16.6667 5.41675C16.6667 5.79357 16.6147 6.32598 16.5388 6.88024C16.506 7.11959 16.3394 7.26898 16.121 7.28787C14.9339 7.39054 12.9706 7.50008 10.0001 7.50008C7.02955 7.50008 5.06629 7.39054 3.87921 7.28787C3.66075 7.26898 3.49419 7.11959 3.46141 6.88024C3.3855 6.32598 3.33341 5.79356 3.33341 5.41675C3.33341 5.03993 3.3855 4.50752 3.46141 3.95326C3.49419 3.71391 3.66075 3.56452 3.87921 3.54562C5.0663 3.44296 7.02955 3.33341 10.0001 3.33341C12.9706 3.33341 14.9339 3.44296 16.121 3.54562C16.3394 3.56452 16.506 3.71391 16.5388 3.95326ZM16.2646 1.88515C17.2701 1.97211 18.0531 2.72719 18.19 3.72711C18.2686 4.30062 18.3334 4.92355 18.3334 5.41675C18.3334 5.90995 18.2686 6.53288 18.19 7.10639C18.0531 8.1063 17.2701 8.86138 16.2646 8.94834C15.0226 9.05576 13.0108 9.16675 10.0001 9.16675C6.98937 9.16675 4.97759 9.05576 3.7356 8.94834C2.73011 8.86138 1.9471 8.1063 1.81016 7.10638C1.73161 6.53288 1.66675 5.90995 1.66675 5.41675C1.66675 4.92355 1.73161 4.30062 1.81016 3.72711C1.9471 2.72719 2.73011 1.97211 3.73561 1.88515C4.97759 1.77774 6.98937 1.66675 10.0001 1.66675C13.0108 1.66675 15.0226 1.77774 16.2646 1.88515ZM16.5388 13.1199C16.6147 13.6742 16.6667 14.2066 16.6667 14.5834C16.6667 14.9602 16.6147 15.4926 16.5388 16.0469C16.506 16.2863 16.3394 16.4356 16.121 16.4545C14.9339 16.5572 12.9706 16.6667 10.0001 16.6667C7.02955 16.6667 5.06629 16.5572 3.87921 16.4545C3.66075 16.4356 3.49419 16.2863 3.46141 16.0469C3.3855 15.4926 3.33341 14.9602 3.33341 14.5834C3.33341 14.2066 3.3855 13.6742 3.46141 13.1199C3.49419 12.8806 3.66075 12.7312 3.87921 12.7123C5.0663 12.6096 7.02955 12.5001 10.0001 12.5001C12.9706 12.5001 14.9339 12.6096 16.121 12.7123C16.3394 12.7312 16.506 12.8806 16.5388 13.1199ZM16.2646 11.0518C17.2701 11.1388 18.0531 11.8939 18.19 12.8938C18.2686 13.4673 18.3334 14.0902 18.3334 14.5834C18.3334 15.0766 18.2686 15.6995 18.19 16.2731C18.0531 17.273 17.2701 18.028 16.2646 18.115C15.0226 18.2224 13.0108 18.3334 10.0001 18.3334C6.98937 18.3334 4.97759 18.2224 3.7356 18.115C2.73011 18.028 1.9471 17.273 1.81016 16.2731C1.73161 15.6995 1.66675 15.0766 1.66675 14.5834C1.66675 14.0902 1.73161 13.4673 1.81016 12.8938C1.9471 11.8939 2.73011 11.1388 3.73561 11.0518C4.97759 10.9444 6.98937 10.8334 10.0001 10.8334C13.0108 10.8334 15.0226 10.9444 16.2646 11.0518Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export const DownArrow: React.FC<IconProps> = ({ className }) => {
  return (
    <svg className={`h-5 w-5 dark:text-white ${className}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        clipRule="evenodd"
        d="M7.46967 9.46967C7.76256 9.17678 8.23744 9.17678 8.53033 9.46967L12 12.9393L15.4697 9.46967C15.7626 9.17678 16.2374 9.17678 16.5303 9.46967C16.8232 9.76256 16.8232 10.2374 16.5303 10.5303L12.5303 14.5303C12.2374 14.8232 11.7626 14.8232 11.4697 14.5303L7.46967 10.5303C7.17678 10.2374 7.17678 9.76256 7.46967 9.46967Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export const CloseIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={`h-5 w-5 dark:text-white ${className}`}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0V0z" fill="none"></path>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
    </svg>
  )
}

export const NotificationBackIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg className={`h-5 w-5 dark:text-white ${className} `} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        clipRule="evenodd"
        d="M12.4336 17.2393C12.6318 17.2393 12.8096 17.1641 12.9736 17.0068L17.4854 12.502C17.6221 12.3652 17.7041 12.1943 17.7246 12.0098V16.5215C17.7246 16.9316 18.0391 17.2393 18.4629 17.2393C18.8799 17.2393 19.1943 16.9316 19.1943 16.5215V7.38184C19.1943 6.95801 18.8799 6.65039 18.4629 6.65039C18.0391 6.65039 17.7246 6.95801 17.7246 7.38184V11.8799C17.7041 11.6953 17.6221 11.5244 17.4854 11.3877L12.9736 6.88281C12.8096 6.72559 12.6318 6.65039 12.4336 6.65039C12.0166 6.65039 11.709 6.95801 11.709 7.36816C11.709 7.58008 11.791 7.76465 11.9277 7.90137L13.459 9.44629L15.4688 11.251L13.999 11.1963H5.50195C5.05078 11.1963 4.74316 11.5039 4.74316 11.9482C4.74316 12.3857 5.05078 12.6934 5.50195 12.6934H13.999L15.4756 12.6387L13.459 14.4434L11.9277 15.9883C11.791 16.125 11.709 16.3096 11.709 16.5215C11.709 16.9316 12.0166 17.2393 12.4336 17.2393Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export const TwitterIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={`h-5 w-5 dark:text-white ${className} `}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.633 7.99704C19.646 8.17204 19.646 8.34604 19.646 8.52004C19.646 13.845 15.593 19.981 8.186 19.981C5.904 19.981 3.784 19.32 2 18.172C2.324 18.209 2.636 18.222 2.973 18.222C4.856 18.222 6.589 17.586 7.974 16.501C6.203 16.464 4.719 15.304 4.207 13.708C4.456 13.745 4.706 13.77 4.968 13.77C5.329 13.77 5.692 13.72 6.029 13.633C4.182 13.259 2.799 11.638 2.799 9.68004V9.63004C3.336 9.92904 3.959 10.116 4.619 10.141C3.534 9.41904 2.823 8.18404 2.823 6.78704C2.823 6.03904 3.022 5.35304 3.371 4.75504C5.354 7.19804 8.335 8.79504 11.677 8.97004C11.615 8.67004 11.577 8.35904 11.577 8.04704C11.577 5.82704 13.373 4.01904 15.605 4.01904C16.765 4.01904 17.812 4.50504 18.548 5.29104C19.458 5.11604 20.33 4.77904 21.104 4.31804C20.805 5.25304 20.168 6.03904 19.333 6.53804C20.144 6.45004 20.93 6.22604 21.652 5.91404C21.104 6.71204 20.419 7.42304 19.633 7.99704Z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export const FacebookIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={`h-5 w-5 dark:text-white  ${className} `}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.001 2.00195C6.47895 2.00195 2.00195 6.47895 2.00195 12.001C2.00195 16.991 5.65795 21.127 10.439 21.88V14.892H7.89895V12.001H10.439V9.79795C10.439 7.28995 11.932 5.90695 14.215 5.90695C15.309 5.90695 16.455 6.10195 16.455 6.10195V8.56095H15.191C13.951 8.56095 13.563 9.33295 13.563 10.124V11.999H16.334L15.891 14.89H13.563V21.878C18.344 21.129 22 16.992 22 12.001C22 6.47895 17.523 2.00195 12.001 2.00195Z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export const TelegramIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={`h-5 w-5 dark:text-white ${className} `}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6601 4.22511C20.3531 3.96474 19.8708 3.92749 19.3722 4.12768H19.3713C18.8469 4.33811 4.52653 10.4806 3.94356 10.7315C3.83753 10.7684 2.91149 11.1139 3.00688 11.8835C3.09203 12.5774 3.8363 12.8648 3.92719 12.898L7.56787 14.1446C7.80941 14.9486 8.69983 17.915 8.89674 18.5488C9.01956 18.9438 9.21975 19.4629 9.5706 19.5698C9.87846 19.6885 10.1847 19.58 10.3828 19.4245L12.6087 17.3599L16.2019 20.1622L16.2874 20.2133C16.5314 20.3214 16.7652 20.3755 16.9883 20.3755C17.1606 20.3755 17.326 20.3431 17.4841 20.2784C18.0224 20.0574 18.2377 19.5444 18.2603 19.4863L20.9442 5.53557C21.108 4.79048 20.8803 4.41139 20.6601 4.22511ZM10.7787 14.6432L9.55054 17.9183L8.32237 13.8244L17.7383 6.86485L10.7787 14.6432Z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export const EmailIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={`h-5 w-5 dark:text-white ${className} `}
      viewBox="0 0 24 24"
      fill="none"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M14.0461 3.23553C12.0679 2.77386 9.99162 2.99498 8.15497 3.86293C6.31832 4.73088 4.82929 6.19462 3.93 8.01613C3.03072 9.83765 2.77406 11.9098 3.20177 13.8957C3.62948 15.8816 4.7164 17.6643 6.2858 18.9542C7.85519 20.244 9.81476 20.965 11.8459 20.9999C13.877 21.0348 15.8602 20.3816 17.473 19.1465C17.8318 18.8718 17.8999 18.3582 17.6251 17.9994C17.3504 17.6406 16.8368 17.5725 16.478 17.8473C15.1584 18.8578 13.5358 19.3922 11.874 19.3637C10.2122 19.3351 8.60891 18.7452 7.32486 17.6899C6.04081 16.6346 5.15151 15.1759 4.80156 13.5511C4.45162 11.9263 4.66161 10.2309 5.39739 8.74059C6.13317 7.25026 7.35147 6.05265 8.85418 5.34251C10.3569 4.63237 12.0557 4.45145 13.6742 4.82918C15.2928 5.20691 16.736 6.12106 17.7692 7.423C18.8023 8.72493 19.3646 10.3381 19.3648 12.0002V12.8183C19.3648 13.2524 19.1923 13.6686 18.8854 13.9755C18.5785 14.2824 18.1623 14.4548 17.7283 14.4548C17.2943 14.4548 16.878 14.2824 16.5711 13.9755C16.2642 13.6686 16.0918 13.2524 16.0918 12.8183V8.72716C16.0918 8.27526 15.7255 7.90892 15.2736 7.90892C14.8217 7.90892 14.4553 8.27526 14.4553 8.72716V8.72725C13.7715 8.21343 12.9214 7.90894 12.0001 7.90894C9.74063 7.90894 7.90894 9.74063 7.90894 12.0001C7.90894 14.2596 9.74063 16.0913 12.0001 16.0913C13.2179 16.0913 14.3114 15.5593 15.0608 14.7149C15.166 14.8628 15.2839 15.0027 15.414 15.1327C16.0278 15.7465 16.8602 16.0913 17.7283 16.0913C18.5963 16.0913 19.4288 15.7465 20.0426 15.1327C20.6564 14.5189 21.0012 13.6864 21.0012 12.8183V12.0001C21.0011 9.96864 20.3138 7.99701 19.051 6.40575C17.7883 4.81449 16.0244 3.69719 14.0461 3.23553ZM9.54542 12.0001C9.54542 10.6444 10.6444 9.54542 12.0001 9.54542C13.3558 9.54542 14.4548 10.6444 14.4548 12.0001C14.4548 13.3558 13.3558 14.4548 12.0001 14.4548C10.6444 14.4548 9.54542 13.3558 9.54542 12.0001Z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  )
}

export const LinkIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={`h-5 w-5 dark:text-white ${className} `}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.6693 5.33057C16.8144 3.47558 13.8068 3.47558 11.9518 5.33057L10.8912 6.39123C10.5983 6.68413 10.5983 7.159 10.8912 7.45189C11.1841 7.74479 11.6589 7.74479 11.9518 7.45189L13.0125 6.39123C14.2817 5.12203 16.3395 5.12203 17.6087 6.39123C18.8779 7.66044 18.8779 9.71822 17.6087 10.9874L15.4874 13.1087C14.2182 14.378 12.1604 14.378 10.8912 13.1087C10.5983 12.8159 10.1234 12.8159 9.83051 13.1087C9.53762 13.4016 9.53762 13.8765 9.83051 14.1694C11.6855 16.0244 14.693 16.0244 16.548 14.1694L18.6693 12.0481C20.5243 10.1931 20.5243 7.18556 18.6693 5.33057Z"
        fill="currentColor"
      ></path>
      <path
        d="M14.1695 9.83057C12.3145 7.97558 9.30701 7.97558 7.45202 9.83057L5.3307 11.9519C3.47571 13.8069 3.47571 16.8144 5.3307 18.6694C7.18569 20.5244 10.1932 20.5244 12.0482 18.6694C12.3411 18.3765 12.3411 17.9016 12.0482 17.6087C11.7553 17.3159 11.2804 17.3159 10.9875 17.6087C9.71835 18.878 7.66056 18.878 6.39136 17.6087C5.12215 16.3395 5.12215 14.2818 6.39136 13.0126L8.51268 10.8912C9.78188 9.62203 11.8397 9.62203 13.1089 10.8912C13.4018 11.1841 13.8766 11.1841 14.1695 10.8912C14.4624 10.5983 14.4624 10.1235 14.1695 9.83057Z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export const CheckIcon: React.FC<IconProps> = ({ className = '', ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M10.6859 17C11.0219 17 11.2755 16.8605 11.4594 16.5879L17.419 7.29337C17.5522 7.09049 17.6029 6.91297 17.6029 6.74179C17.6029 6.30432 17.2986 6 16.8548 6C16.5441 6 16.3603 6.10778 16.1701 6.40576L10.6605 15.155L7.8202 11.5095C7.63634 11.2622 7.44613 11.1608 7.16717 11.1608C6.72337 11.1608 6.40002 11.4778 6.40002 11.9153C6.40002 12.1055 6.46977 12.2893 6.62827 12.4859L9.91242 16.5942C10.1343 16.8669 10.3689 17 10.6859 17Z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export const InfoIcon: React.FC<IconProps> = ({ className = '', ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        stroke="currentColor"
        d="M6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path stroke="currentColor" d="M5.625 5.625H6V8.25H6.375" strokeLinecap="round" strokeLinejoin="round" />
      <path
        fill="currentColor"
        d="M5.90625 4.5C6.21691 4.5 6.46875 4.24816 6.46875 3.9375C6.46875 3.62684 6.21691 3.375 5.90625 3.375C5.59559 3.375 5.34375 3.62684 5.34375 3.9375C5.34375 4.24816 5.59559 4.5 5.90625 4.5Z"
      />
    </svg>
  )
}

export const PayPalIcon: React.FC<IconProps> = ({ className = '', ...props }) => {
  return (
    <svg
      height="24"
      className={className}
      {...props}
      viewBox="0 0 101 32"
      preserveAspectRatio="xMinYMin meet"
      xmlns="http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg"
    >
      <path
        fill="#003087"
        d="M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z"
      ></path>
      <path
        fill="#003087"
        d="M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z"
      ></path>
      <path
        fill="#003087"
        d="M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z"
      ></path>
      <path
        fill="#009cde"
        d="M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z"
      ></path>
      <path
        fill="#009cde"
        d="M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z"
      ></path>
      <path
        fill="#009cde"
        d="M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z"
      ></path>
    </svg>
  )
}

export default CartIcon
