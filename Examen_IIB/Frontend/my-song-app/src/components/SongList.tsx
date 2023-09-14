import React from "react";

interface Song {
  id: number;
  title: string;
  artist: string;
}

interface SongListProps {
  songs: Song[];
  onDelete: (id: number) => void;
}
const SongList: React.FC<SongListProps> = ({ songs, onDelete }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.tittles}>Lista de Canciones</h2>
      <div>
        <button style={styles.button_add}>Agregar Nueva Canción</button>
      </div>
      <table style={styles.table}>
        <thead>
          <tr style={{fontSize:'24px', fontWeight:'bold'}}>
            <th>Título</th>
            <th>Artista</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody style={styles.table_body}>
          {songs.map((song) => (
            <tr key={song.id}>
              <td style={styles.td}>{song.title}</td>
              <td style={styles.td}>{song.artist}</td>
              <td>
              <button
                  style={styles.button_update}
                  onClick={() => onDelete(song.id)}
                >
                  Actualizar
                </button>
                <button
                  style={styles.button_delete}
                  onClick={() => onDelete(song.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default SongList;

const styles = {
  container: {
    fontFamily: "Calibri, sans-serif",
    //backgroundColor negro azulado
    backgroundColor:'#797979',
    color: '#fff',
    borderRadius: '25px'
  },
  tittles: {
    textAlign: "center",
    marginTop:'0px',
    marginButtom: '0px'
  },
  table: {
    border: "1px solid #ccc",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  table_body: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "14px",
    textAlign: "center",
  },
  button_delete: {
    backgroundColor: "#f44336",
    border: "none",
    color: "white",
    padding: "5px 10px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  button_update: {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "5px 10px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "12px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  },
  button_add: {
    backgroundColor: "#008CBA",
    border: "none",
    color: "white",
    padding: "5px 10px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "12px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    marginBottom: "10px",	
    marginLeft: "80%",	
  },
  td: {
    padding: "5px 10px",
    marginTop: "10px",
  },
};
