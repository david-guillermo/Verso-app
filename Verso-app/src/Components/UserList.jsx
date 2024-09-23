import { useEffect, useState } from 'react';
import UserCard from './UserCard';

const comments = [
"La vida es lo que sucede mientras estás ocupado haciendo otros planes.",
"El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
"Las oportunidades no suceden, las creas tú.",
"No dejes para mañana lo que puedes hacer hoy.",
"El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
"Cree que puedes y estarás a mitad de camino.",
"La perfección no es alcanzable, pero si perseguimos la perfección podemos alcanzar la excelencia.",
"El que no arriesga, no gana.",
"La felicidad no es algo hecho. Proviene de tus propias acciones.",
"La mayor gloria no es nunca caer, sino levantarse siempre.",
"La vida es corta, sonríele a quien llora, ignora a quien te critica, y sé feliz con quien te importa.",
"El amor no tiene cura, pero es la única medicina para todos los males.",
"Si puedes soñarlo, puedes hacerlo.",
"La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
"El único modo de hacer un gran trabajo es amar lo que haces.",
"La vida no se mide por las veces que respiras, sino por los momentos que te dejan sin aliento.",
"El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora.",
"No cuentes los días, haz que los días cuenten.",
"El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
"Cada día es una nueva oportunidad para cambiar tu vida." ,
"La historia me atrapó desde el primer capítulo. Definitivamente una lectura imprescindible." , 
"El último álbum fue una montaña rusa de emociones, cada canción mejor que la anterior." ,
"A veces las palabras sobran, y este libro es el ejemplo perfecto de eso." ,
"Una crítica social disfrazada de aventura. Increíblemente bien narrado." ,
"Su voz resonaba como un eco en las montañas. Pura magia en forma de melodía." ,  
"No pensé que un final pudiera romperme tanto el corazón." ,
"Cada página era un desafío, pero valió la pena cada palabra." , 
"Sus canciones son como poemas modernos. Una belleza musical." ,
"Un retrato crudo y realista de lo que significa ser humano." ,
"El ritmo es tan contagioso que no puedo dejar de tararearlo." ,
"La trama es compleja, pero la narrativa lo convierte en algo adictivo." ,
"Su última actuación en vivo fue como ver una pintura en movimiento." ,
"Algunos personajes simplemente se quedan contigo, y este protagonista lo logró." ,
"Una reflexión sobre el amor y la pérdida que me dejó pensando por días." ,
"Los acordes de esa canción parecían tocar el alma misma." ,
"Nunca había leído algo tan introspectivo, es como si el autor me conociera." ,
"Cada vez que escucho esa canción, siento que estoy volviendo a casa." ,
"La química entre los personajes es palpable. No puedes evitar enamorarte de ellos." ,
"El sonido de la guitarra era como un susurro entre los árboles." ,
"Este libro me hizo replantearme tantas cosas sobre la vida y las relaciones." ,
"La producción de este álbum es impecable. Cada detalle fue cuidado al máximo." ,
"Una aventura épica que no dejará indiferente a nadie. Recomendado al 100%." ,
"El bajo en esa canción es simplemente increíble. No puedes evitar mover los pies." ,
"La autora tiene una forma única de jugar con las emociones del lector." ,
"Este libro es un recordatorio de que la vida puede cambiar en un instante." ,
"Esos versos parecen escritos para los corazones rotos, pero con esperanza." ,
"Un clásico moderno que seguramente será leído por generaciones." ,
"Esa letra es poesía pura, el tipo de canción que te hace pensar en lo más profundo." ,
"Un viaje emocional que te dejará con ganas de más. No puedo esperar a su secuela." ,
"Cada palabra en esa crítica resonó conmigo. El autor sabe exactamente cómo conectar." ,
"La melodía me hizo viajar a lugares que nunca pensé que existirían." ,
"Nunca había leído una descripción tan vívida. Podía ver cada escena en mi mente." ,
"La producción del álbum es cruda, directa, y por eso funciona tan bien." ,
"El desarrollo de los personajes es lo que hace que esta historia sea inolvidable." ,
"Esas notas finales de piano me dieron escalofríos. Increíble cierre." ,
"Una crítica al sistema disfrazada de novela de aventuras. Magistral." ,
"El estribillo es pegajoso, pero son las estrofas las que realmente cuentan la historia." ,
"La prosa es lírica, como si estuviera leyendo una canción en forma de novela." ,
"Esa canción me recordó los veranos de mi infancia. Pura nostalgia." ,
"Este libro es como un espejo. Refleja todas las cosas que nunca quise enfrentar." ,
"Su voz tiene un matiz que rara vez encuentras en la música comercial. Es genuina." ,
"Un thriller psicológico que te mantendrá al borde del asiento hasta la última página." ,
"Los detalles en la producción son impresionantes. Cada sonido cuenta una historia." ,
"Los personajes secundarios son tan importantes como los principales en esta obra." ,
"Una oda a la naturaleza y a la conexión humana. Un libro para reflexionar." ,
"Esa canción me hizo llorar. No puedo explicar por qué, pero lo hizo." ,
"La trama se desenreda como un misterio, manteniendo al lector en vilo hasta el final." ,
"La combinación de instrumentos crea una atmósfera que pocas bandas logran." ,
"Este autor tiene una forma única de hacer que todo parezca familiar, aunque no lo sea." ,
"La forma en que la historia se desarrolla lentamente la convierte en una experiencia casi meditativa." ,
];

const getRandomComment = () => {
return comments[Math.floor(Math.random() * comments.length)];
};

const UserList = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
    const fetchUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();

    const userData = data.results.map((user) => ({
        profilePicture: user.picture.medium,
        name: `${user.name.first} ${user.name.last}`,
        country: user.location.country,
        comment: getRandomComment(),
    }));

    setUsers(userData);
    };

    fetchUsers();
}, []);

return (
    <div className="flex flex-wrap justify-center">
    {users.map((user, index) => (
        <UserCard
        key={index}
        profilePicture={user.profilePicture}
        name={user.name}
        country={user.country}
        comment={user.comment}
        />
    ))}
    </div>
);
};

export default UserList;
