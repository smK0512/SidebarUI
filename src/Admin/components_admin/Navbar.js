import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
        <img style={{ height:"90%", width:"20%", paddingLeft:"20px" }}
        className="sidebar__Logo"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXMAAACICAMAAAAiRvvOAAABGlBMVEX7sDv///8zMzP3kx4AAAD7rjP8xn78vGH7rCj+6M77rS8uLi4dKTMqKipcXFz91qN6enolJSWhoaH93LH7qiL8lh3+9u37ulr8wGz+7df905skLTSoain/tDv5pDCrq6vx8fHT09PKysro6Ojd3d1oaGjFxcXS0tIrMDPt7e1LS0uvr6+RkZGybyhwcHAWKTT94Lz6pjKFhYXfnjoYGBhkZGSampq6uroTExP92azrjSCjaCmnejdURjT4myfHjjiacTY9PT3+8uRtTS9cRTDYmTnwqTv8yohDOjK1gzh8XjWIZjYQIzJCQkJRVlyHWS3KfCV6Uy7ehiJ6XjVmUTSOYzDomzEAHjRUPin3jAB+YDVgaXD7pQC7dCbRyF8rAAAPvklEQVR4nO2d+1viuBrHKQZFboKCjjJouQqIqAwC6ow7Oq66q3N0HXf37J6Z///fOLn3kpSmFVrnsd8ffLDN9dM3yZs0hJgWKWjF8N9xPxeU/rP0drV4yJk30sNsOihlEm9YycQmYV6fpOPBKRN70ypeYubdIJG/deaJDcS8MQkS+VtnHituQuY7hYh5gEqdQOarEfMglVqJmAetiHnwipgHr4h58IqYBy8X5m2oiPmMNY15+SD+5eHhj08H5dlyj5g7Mc/Ez55KWAv7txmvXKc9pYi5nHm7vQ9hU5VKP7x0Me1M5vbTp7hj84iYS5mXrxY4cUx94aqsSvzgj8cF1DxOf1wdRMwlkjMv/2Ehjqk/xDP3B5lMplyeavPl2yfWQEqlR2kfEzGXMG9fCcghwUol9uHXX377+Pnb8y3kT/HboJa/lExx5c0jYi5hXj4VkUPB4BWm2DXi//nu25XJ/Nvi0yp9Ei09Yi4yL59JzBxq2xKT469cX2Pz//f5021ciHQqGnrEXGSe4cCOUJAjs6HLxfGfi13SewF6xFxg3uYDKAt0bn4EU0UDnptjCZ2LnHki6aqE12gpWQz1/HASsqgpX9GYJMzL+yW7WZtRTtO2pRMi/5Ue7NClzIuLh8suOlwsitXfmhZh5V0y6VDUxM2mW35YayK95JJrUZe3nPKNSZlnngTC226dC9W5NSJh/sPeuciYF5dVtuIsC9BTay5RDq/ltYcVV9KlmOWWSrx15yYmYX5wKvYkisxtEcmjerIvHEiYJxbVCCzaa+LKXNNOxNYRewnzmFpESQMxshbsXALYE3P+Lxl9n+yzUQnz1KFaRQ7tFVFgrl0mJDbnm7mqeUgeljvzl9u5OvOkKnN7R6HCXFuXmJx/5jdqEde9MGd9i8kdP1Jkfm6NiP8tPSr056kTtYqc+LFz2TjwAubv1CJuOo6iMjt/fKnfQv8jT6p0pjKGXqtV5FoovxJzcRx4QX9eXFeKeOM4iMp8RTYN5YiZ27LtlAoXDZgwkC+UbuMKzFNKveSi0EkoMhcbun/miQ0V6CvOzqJsHnpbsto1n1xOxY3noTzmOYtUehQWdKX+eSL5btEkVnTzxXeSSRFnfrgo6ObkkiPYEBwexnyZJs5A3tDIjsxjieKGuVQsky1z3rEpkyLp3P+Rr7ecb28b03mxazGtueAlx7s/xTXgW8V5aMy8Y7jIWH03X5WVnzHfSor7jlNF/uxWhIGAMV8rkhwZ840UjrrhzNxW1E1mHqnpRZ3K3DB0q+ygY9cf0NrW3fOneJmuLR4Iy2N/3duRq6y3JBkrx8FfYC41rCLzh0SHhzMnEQ3mmFdiaRpzS1E586mgrVlL1nIfZOvnR2aD/v35Nn4vWUM/+GGNelS5UrVzS0VmxJw708uvnXlcNFfYL2ODvnd7V3Twp/mlxVGs8pvw/vpVMOd3tqTM+WxTiCgUdUbMReil/QPxpZBU5fg+fh26QP2ca6FzeRXMeRb0Xztz1k27kpwZc2SuFuRn8tfJcurlL3+enbHZaOVZaV1RDmSOzBMbyOG4XKKkBDtPoFW39Rs3M58h8/Jd5cjwWI4qH1Vf+2O1y+XMc4XkIHYur4M5dPlS16kiAyUwjyWL17GiO8cZMv+IkB1tn59vI4Ot/OJ5V1HmI4V+/bfN0F8Jc6tE5oqaHfPMLxVzsMqvnpnH71ESsK2UTr9YG0nE3IH5BwtzyUjorsx1hY4GXyyWHqR/vvYTMb+3hat46s+J2rdsRDi1jMDzYV5MCUoa81BhQdKuV8C8bTXzWEWcwruLbyAo/XdSML6COhfmy1uCVg6NxShXIOEzb3+yMxc8PhUxf/Ofy8ZqbpKdJ3MXubp8r4D5v3bmdz46F27n/+BC9bOhMReWuASFz7z82c7cm4NOU6G7NkpP/9ura1pjGBZz5/dkXOEzz/xmZ+7dQUfQT/9ByBdus4VJTtMnYTFX4PgKmP9qZ/7BD/NC7+S8tPCIx9+JpqVDYq6CMXzm98KLx5gPBz0+bGitQpk8rUlHy6XDYL48/Q0CVfjMRSx+HPR4WtPyzFsZ7mqDbPDMDzfc+3Kk8JnfVuwBK5KN5G7K9jSNJ13YY+dnzIX5pskZXzskOtlaKko3lkoUOvP2s8j8d+/MoWk3AGfe02rD+THfKm4YzL/TzbHT9uXaFDrz8p3I/LP3zqUw1rRVBj3d1OrzZJ5KGns3latvKHzmH0Xm4js2d00g9DH1ENMXmjaZJ3P+agfqJ2RuW8lF8rOaC6Gvalp1SNyVCTv3a37ripy5ZLOci8JnbnfPY/5Wc2GXPtC0Ol7fSsd16sTMjblpM9iN62TfptCZS9zzWMyPncM+valp+kW2kB52NOqgz8/Oi8b2XsX6c4XO3L6Si1TxhRxC78LyHI9yhdXa1zn65+SdRZI7jK77UmwKm7mwkovkbzUXKhuHFq7tFgqFec79CXO+FWjqJk2ZQmf+Tcb8zu+JIulCQ6t35/zOgr6bSxob2b3BC5u5sJKL5Gs1l6qQG5pOKp3r+9Ai34ursIBrUujM7Su5SP5Wc6ksZ8POlXnC+PbAoRfoYTOXuOd+HXSZ5vveP+VvOho68w+yoP4c9MCZm6ejHpz0sJnbN1oQ+VrNDYF5LMGZe5iOhs08LulafG63CIO5r+loyMzbV3Lm334S5r6mo2Ezt2+0IPKzmhsOcz/T0ZCZS91ztJr70zD3MR0Nmbmw0YLoRQ56sMx9TEfDZi5ZyY353W4RDnPv09GQmUtXcpFm5KAHwdzzdDRsO3cIW/lZ/BZ8wzh+QglGyMzFjRZEkq96vl7mXqej4TKXbLQgqvz7MzH3OB0Nl7lkowXRrBx0OfNk0XRs23eG67vpYlHi9k1j7mk66oV5ylJUxnzJfHXaViYZc3GjBZGv7RaKzBMxhUPQlmPiMSxTvk/kaTrqgXlyzf0wkc0l58csOzNHtpKLNKvVXOn5LUoH0YiHPE39Dpdxus2ma++izlztiLwp6ciYf3BgPqvVXNnZUErn50nITmWeMLbTiQcV2UmqMjclOlXO39STMHd0z/1ut1Bg/vIz0KTfVUyuOEa0S535PM5Ak220IKoIxzy9cubGdNTD90NdAs6DuXSjBZHv7RauzJX7FrsRcgLyziPBttO5fokryXppt4czj75FutGCyNeX55SYq46hYj1S062Kvr+QnbBoQ0mP8HPthOYxhjqs5CK9ZLuFC/NYTKF3OZSxul52uEOUfHeprR8qTFdSi7AfWldZ+k2uKPiKU4YFkbnDSi7SjFZzFeZEUsnmRCSiwx2sxPTb5oAwpNK7vJRCUZXnRO1yuXzv5J4jB/1vGODFfXp05ryJefnh/f77939tO+s91MNLO5iIucG8fVqiB2k5Cgc4jZi/SCbm/Hx/N4mnyEfMvcjE/OBJDbn9OJaIuUeZmct/lShiPmtFzIOXmTkZIRW0EDF/icxj6Nl7N+0TCafIR8y9yOwrlpX1IuQR8+g3uANXxDx4RcyDV8Q8eEXMg1fEPHhFzINXxDx4RcyDV8Q8eGHmexHzIJVag8wbk4h5gCpeQuZaLutOKmI+I6EvUkLm+jDtjipiPhMl0BeG0Za+TndYyAale/EXEN+MUkX866NkG2Wtlw9M4k99vhltkc2Oir+dHmmGipgHr4h58IqYB6+IefCKmAeviHnwipgHr4h58ELMG7vVanW3rhBaKRBKTingLITLXt11vt8QrykVTsdQqipFUAlkFmIOsIbugWugq5DkV5zcwGNBbNKPpVd1+5U4KbxjOpJbDTBRKECfJNxxum88NwB0p9Jpmix+DIcdg4Zj4uYE+jsKobpNvaOvOmNQUgOIFagjCC3rtXS/Dlpj58wG4rPX86sqJejoYCSjSLRjZDnI0w/9nBiuMBKv0TUuSQ19q5ufQYoNCcZBoVZrxm3hIJqaVntRXk4CUyxsR1K+vqRtpnviNRvzRgGaEn40OWZToNGnPcUIgD6NtsraXR59sJatO8zlcqRNo2A4004Wfirg9ohi7OGAA/gJ2wio9wAgBR6j9HYR83oXAKtB5gswTtZeA8QcqTnahR1knQChyTV4twOqA1r6PQCIPdZBPUcrW58AMBashGY/6tcAmKBxQb8A9FOO92h1IwukLkEG/0xaqGyAEahDsvGOhDnssFutFroTB+NaHlUeRRuPAKpLp9WkracPRrVWC1dqb7fWs9peNw2G+YGO675a28PPazCp1lpfV3HUvdoIjHExWrUdDAwMwc4YXxuBPEsYxFsDqzG1QK8HBLthzHMF0K/FcQH1Vm1MDKE1MoCMd1B94M08eW4wiyzMQkdJHNfgI7EPt5Q5vJMnCa+C3Vorh0rQGIBai4zcrVUKr9rt1lo4DZwPNqxaoV9r1XEpc61WF0iYgybPr0Uz1REzHVTx1R5hXgW8MYPJnh1Cd7BHi3+MDKt3oSHzzZEUtAlikcPmrdfrOiaNq4t+t0vnTaaB8rZ36nushZjFmaMYo2OacIc26hpjjopCHrW2ypiPsLGjh4kTd2QOb/S6OLEuq7ipb6myUvK+hRgSLirrW3ZxeJKFjTmvEmY+wcwbLBWYfc5SEVS9AbCbXrev0QfazPb7/fgFzrML0rjGhS68NkHMR7jhjY3UKQEKBP+xjOz6V8S8aiPDmbOhjPRPwMYcRaPMR4y5bmauOzJHuHtfcZQcGBJEJua7InNssBbmVQCr3ZQy5z0zrsjQYE7cBZG5hlpcwVJUyFwnXSdk3mw26cjdaOI6FLrwUhOT7ul6B+doYs7qbQAxlAd6D3SBzbsWmafz0HFKDyxFJc3dxhw+0Q7KETMficwJDcx8ROtYz5Oxbbqd4+rZmKNqN3FIwpw9qj6vPUq5jqJZmNO+RQcXrMItU2wqyByaGrrRT/NyIVDHKHaBDcO4UDX8HIyuajKklt0g/awFQx7mOhE6dJE58s8ahTytGc2Md7HQSNI0iw7tNXXQ3WtK+nMTc+z74gnWAMdGzPtNmg4N34cBs6skYnVIMkO/6El8AmPeZsyJ8IiLZwIoGm6fFxpnPtaIO0AHYRxDR8yQOFqsC1SUJuDB0L/HgPk3JMaIX+tZmOt4jlPlzKvmhHGZmvZpik7tocuZ93DCeY34LcQ+SBfLa5ZnzMnDqMNsd6zMB4DVET1q2NvzawaBPfaBAGjRsuOaNQnzHk0EAkGqM+bjHSRS7xb8hPNu7OyQloijjlG0+g67Ca/CjzTYjm1cq1V5NJ0njPIgT7rBU4HX6ngebk4ABdTZNXvK6JYwiu6QVrZrIIOVaJAZOcoLP5I9FAh7EB10jdy0ZGFrVLiYuI4NVO7OmNGhk7I6qw8KNeZxGrQSNW3cYWXRecVIw4nWuLDghHMwy3nhVEXMkfKSVYX56f+kM2rvrjA2zwAAAABJRU5ErkJggg=="
        alt="">
        </img>
        <h3 style={{ paddingLeft:"50px",   color: "white" }}>IRTI robotics</h3>
          <div style={{paddingLeft:"800px"}} className="navbar-container container">
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Alert"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Alert
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Employee"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Employee
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;