import PropTypes from 'prop-types';

const UserCard = ({ profilePicture, name, country, comment }) => {
return (
        <div className="p-5 m-4 w-64 mt-20 mr-12 UserCard">
            <div className="UserCardStyle">
                <div className="flex flex-col items-center ">
                    {/* Imagen de perfil */}
                    <img
                    src={profilePicture}
                    alt={`${name}'s profile`}
                    className="rounded-full w-20 h-20 object-cover mb-4"
                    />
                    {/* Nombre del usuario */}
                    <h2 className="text-xl mb-2 text-gray-700 FontNombreDeUsuario">{name}</h2>
                    {/* País */}
                    <p className="text-gray-700 mb-2 FontPais">{country}</p>
                    {/* Comentario */}
                    <p className="text-sm text-gray-100 text-center FontComentario ">{comment}</p>
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
