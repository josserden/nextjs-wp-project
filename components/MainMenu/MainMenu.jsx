import { ButtonLink } from 'components';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { FaHouseUser, FaHeart } from 'react-icons/fa';

export const MainMenu = props => {
  return (
    <header className="sticky top-0 left-0 z-50 bg-slate-800">
      <div className="container flex items-center">
        <div className="flex items-center gap-0.5 p-2 text-pink-600">
          <FaHouseUser size={30} />
          <FaHeart size={30} />
        </div>

        <nav className="w-full">
          <ul className=" flex flex-1 justify-end gap-4 text-slate-50">
            {props.items.map(item => (
              <li
                key={item.id}
                className="group relative cursor-pointer hover:bg-slate-700"
                tabIndex={0}
                role="link"
              >
                <Link href={item.destination}>
                  <a className="block p-5">{item.label}</a>
                </Link>

                {!!item.subMenuItems.length && (
                  <ul className="absolute right-0 top-full -mt-3 text-slate-50 ">
                    {item.subMenuItems.map(subItem => (
                      <li
                        key={subItem.id}
                        className="hidden bg-slate-800 text-right group-hover:block"
                      >
                        <Link href={subItem.destination}>
                          <a className="block whitespace-nowrap p-5 hover:bg-slate-700">
                            {subItem.label}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="my-auto ml-2">
          <ButtonLink
            destination={props.callToAction.destination}
            label={props.callToAction.label}
          />
        </div>
      </div>
    </header>
  );
};

MainMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      destination: PropTypes.string.isRequired,
      subMenuItems: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          destination: PropTypes.string.isRequired,
        }),
      ),
    }).isRequired,
  ),
};
