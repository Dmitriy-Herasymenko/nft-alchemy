const CopyClipboard = ({ content }) => {
  return (
    <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
      onClick={() => navigator.clipboard.writeText(content)}
    >
      <path
    fillRule="evenodd"
    clipRule="evenodd"
        d="M5.83333 6.61539C5.12206 6.61539 4.54545 7.18938 4.54545 7.89744V19.1795C4.54545 19.8875 5.12206 20.4615 5.83333 20.4615H14.0758C14.787 20.4615 15.3636 19.8875 15.3636 19.1795V11.3112C15.3636 10.9712 15.2279 10.6451 14.9864 10.4047L11.5571 6.99089C11.3156 6.75046 10.988 6.61539 10.6465 6.61539H5.83333ZM3 7.89744C3 6.33971 4.26853 5.07692 5.83333 5.07692H10.6465C11.3979 5.07692 12.1186 5.37408 12.6499 5.90303L16.0792 9.3168C16.6106 9.84575 16.9091 10.5632 16.9091 11.3112V19.1795C16.9091 20.7372 15.6406 22 14.0758 22H5.83333C4.26853 22 3 20.7372 3 19.1795V7.89744Z"
        fill="#030D45"
      />
       <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.12121 2.76923C7.12121 2.3444 7.46717 2 7.89394 2H12.1919C12.9434 2 13.664 2.29716 14.1954 2.82611L19.1701 7.77834C19.7015 8.30729 20 9.0247 20 9.77275V17.1282C20 17.553 19.654 17.8974 19.2273 17.8974C18.8005 17.8974 18.4545 17.553 18.4545 17.1282V9.77275C18.4545 9.43273 18.3189 9.10663 18.0773 8.8662L13.1026 3.91397C12.8611 3.67353 12.5335 3.53846 12.1919 3.53846H7.89394C7.46717 3.53846 7.12121 3.19407 7.12121 2.76923Z"
      fill="#030D45"
    />
    </svg>
  );
};

export default CopyClipboard;
