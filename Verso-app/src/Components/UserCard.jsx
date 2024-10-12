import PropTypes from 'prop-types';

const UserCard = ({ profilePicture, name, country, comment }) => {
return (
        <div className="p-5 m-4 w-64 mt-20 mr-12 UserCard dark:border-[#717171a4]">
            <div className="UserCardStyle ">
                <div className="flex flex-col items-center ">
                    <img src={profilePicture} alt={`${name}'s profile`} className="rounded-full w-20 h-20 object-cover mb-4"/>
                    <h2 className="text-xl mb-2 text-gray-400 FontNombreDeUsuario CardHoverText">{name}</h2>
                    <p className="text-gray-500 mb-2 FontPais CardHoverText">{country}</p>
                    <p className="text-center FontComentario CardHoverText text-[#191919c5] dark:text-[#9f9f9f]">{comment}</p>
                </div>
            </div>
        </div>
    );
};

UserCard.propTypes = {
profilePicture: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
country: PropTypes.string.isRequired,
comment: PropTypes.string.isRequired,
};

export default UserCard;
