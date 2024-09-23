import PropTypes from 'prop-types';

const UserCard = ({ profilePicture, name, country, comment }) => {
return ( 
    <div className="bg-stone-400 shadow-md rounded-lg p-4 m-4 w-64 hover:bg-lime-400">
    <div className="flex flex-col items-center">
        {/* Imagen de perfil */}
        <img
        src={profilePicture}
        alt={`${name}'s profile`}
        className="rounded-full w-20 h-20 object-cover mb-4"
        />
        {/* Nombre del usuario */}
        <h2 className="text-xl mb-2 text-gray-700 font-bold FontNombreDeUsuario">{name}</h2>
        {/* País */}
        <p className="text-gray-700 font-semibold mb-2 FontPais">{country}</p>
        {/* Comentario */}
        <p className="text-sm text-sky-800 text-center FontComentario font-bold">{comment}</p>
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
