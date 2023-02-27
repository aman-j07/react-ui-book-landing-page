import './Header.css'
import book from "../assets/logos/books.png";
import websiteLayout from '../assets/images/website-layout.png'
import websiteLayoutWithAuthor from '../assets/images/website-layout-2.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <span className='header__logo'>
          <img src={book} alt="book logo" />
          <span>Pages</span>
        </span>
        <h4 className='header__subhead'>Book Website Template</h4>
        <p className='header__info'>
          Pages is a professional author bookstore Webflow template bundled with
          a bunch of unique layouts. Impressive interface and practical sections
          put all the creative power right in your hands to publish your
          masterpiece.
        </p>
      </div>
      <div className='header__bottom'>
        <img className='header__bannerpic header__bannerpic--prior' src={websiteLayout} alt='website layout without author'/>
        <img className='header__bannerpic' src={websiteLayoutWithAuthor} alt='website layout with author'/>
      </div>
    </header>
  );
};

export default Header;
