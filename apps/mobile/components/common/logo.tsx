import Svg, { type SvgProps, Path } from 'react-native-svg'

export const Logo = (props: SvgProps) => (
  <Svg
    viewBox="0 0 765 765"
    fill="none"
    {...props}>
    <Path
      fill="#E4E4E7"
      fillRule="evenodd"
      d="M382.5 737.936c196.302 0 355.436-159.134 355.436-355.436S578.802 27.064 382.5 27.064 27.064 186.198 27.064 382.5 186.198 737.936 382.5 737.936Zm0 27.064C593.749 765 765 593.749 765 382.5S593.749 0 382.5 0 0 171.251 0 382.5 171.251 765 382.5 765Z"
      clipRule="evenodd"
    />
    <Path
      fill="#E4E4E7"
      fillRule="evenodd"
      d="M368.968 737.936v-72.17h27.064v72.17h-27.064Z"
      clipRule="evenodd"
    />
    <Path
      fill="#09090B"
      d="M441.313 438.446V331.424h26.857v14.943h1.009c1.347-2.423 3.231-4.914 5.654-7.471 2.423-2.693 5.52-4.914 9.289-6.664 3.904-1.885 8.683-2.827 14.337-2.827 7.943 0 14.472 1.885 19.587 5.654 5.116 3.769 8.885 8.616 11.308 14.539h.404c2.692-5.116 6.664-9.76 11.914-13.933 5.384-4.173 12.519-6.26 21.404-6.26 7.539 0 13.799 1.75 18.779 5.25 5.116 3.366 8.885 7.943 11.308 13.731 2.558 5.789 3.837 12.049 3.837 18.78v71.28h-26.856V372.82c0-6.193-1.549-11.241-4.645-15.145-2.961-4.039-7.404-6.058-13.327-6.058-4.712 0-8.548 1.279-11.51 3.837-2.827 2.423-4.914 5.519-6.26 9.288a37.415 37.415 0 0 0-1.817 11.51v62.194h-26.857V372.82c0-6.193-1.48-11.241-4.442-15.145-2.962-4.039-7.471-6.058-13.529-6.058-4.712 0-8.549 1.279-11.51 3.837-2.827 2.423-4.914 5.586-6.26 9.49-1.212 3.77-1.817 7.539-1.817 11.308v62.194h-26.857ZM310.422 478.024v-146.6h26.857v14.943h1.413c.943-1.616 2.626-3.769 5.049-6.462 2.557-2.692 6.058-5.115 10.5-7.269s10.096-3.231 16.962-3.231c8.077 0 15.077 1.615 21.001 4.846 5.923 3.096 10.836 7.337 14.74 12.722 3.904 5.25 6.799 11.173 8.683 17.769a68.595 68.595 0 0 1 3.029 20.193 68.585 68.585 0 0 1-3.029 20.193c-1.884 6.596-4.779 12.587-8.683 17.972-3.904 5.25-8.817 9.49-14.74 12.721-5.924 3.096-12.924 4.645-21.001 4.645-6.866 0-12.52-1.077-16.962-3.231-4.442-2.289-7.943-4.779-10.5-7.472-2.423-2.692-4.106-4.779-5.049-6.259h-1.413v54.52h-26.857Zm26.453-93.089c0 5.52 1.01 10.837 3.029 15.953 2.019 5.115 5.048 9.356 9.087 12.721 4.038 3.231 9.087 4.846 15.144 4.846 6.193 0 11.308-1.615 15.347-4.846 4.039-3.365 7.068-7.606 9.087-12.721a43.074 43.074 0 0 0 3.029-15.953c0-5.519-1.01-10.837-3.029-15.952-2.019-5.116-5.048-9.289-9.087-12.52-4.039-3.365-9.154-5.048-15.347-5.048-6.057 0-11.106 1.683-15.144 5.048-4.039 3.231-7.068 7.404-9.087 12.52a43.069 43.069 0 0 0-3.029 15.952ZM228.165 440.466c-10.096 0-18.847-1.818-26.251-5.452-7.404-3.77-13.596-8.818-18.577-15.145-4.846-6.327-8.481-13.597-10.904-21.808-2.289-8.212-3.433-16.828-3.433-25.847 0-7.673.875-15.481 2.625-23.424a93.223 93.223 0 0 1 8.683-23.02 76.638 76.638 0 0 1 14.943-19.789c6.192-5.923 13.596-10.567 22.212-13.933 8.615-3.365 18.577-5.048 29.885-5.048 6.193 0 11.51.404 15.953 1.212l6.663 1.211v24.635l-3.634-.605c-2.289-.404-5.183-.808-8.683-1.212a86.358 86.358 0 0 0-10.299-.606c-8.615 0-16.019 1.414-22.212 4.241-6.058 2.827-11.106 6.596-15.145 11.308-3.903 4.577-6.865 9.558-8.884 14.942-2.02 5.385-3.231 10.568-3.635 15.549 1.211-2.019 3.231-4.442 6.058-7.269s6.663-5.318 11.51-7.472c4.981-2.154 11.24-3.231 18.779-3.231 10.77 0 19.789 2.356 27.058 7.068 7.27 4.711 12.722 10.837 16.357 18.375 3.634 7.404 5.452 15.212 5.452 23.424 0 6.462-1.145 12.789-3.433 18.981-2.154 6.058-5.519 11.578-10.096 16.558-4.578 4.981-10.299 8.953-17.164 11.914-6.731 2.962-14.674 4.443-23.828 4.443Zm0-22.818c7.673 0 14.202-2.491 19.587-7.472 5.519-5.115 8.279-12.048 8.279-20.798 0-8.75-2.76-15.616-8.279-20.597-5.385-5.115-11.914-7.673-19.587-7.673s-14.27 2.558-19.789 7.673c-5.385 4.981-8.077 11.847-8.077 20.597 0 8.75 2.692 15.683 8.077 20.798 5.519 4.981 12.116 7.472 19.789 7.472Z"
    />
  </Svg>
)