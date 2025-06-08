interface FooterProps {
  className?: string;
}

const Footer = (props: FooterProps) => {
  const { className } = props;
  return (
    <footer
      className={`${className} flex w-full items-center justify-center bg-slate-800 py-20`}
    >
      <p className="text-lg text-white">Created By Alvinnes</p>
    </footer>
  );
};

export default Footer;
