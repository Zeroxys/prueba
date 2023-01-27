import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMusic,
  faPlus,
  faClose,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import Table from "../Table";
import { musicTableStyles } from "./styles";
import Button from "../Button";
import Input from "../Input";

const ModalInlineStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    width: '40%',
    height: '30%',
    boxShadow: '0 2px 2px 2px rgba(9, 9, 9, 0.23)'
  },
};

const MusicInfo = ({id, name, author, onDelete}) => {
  return (
    <div key={id}>
      <div>
        <p>{name}</p>
        <p>{author}</p>
      </div>
      <FontAwesomeIcon 
        onClick={() => onDelete(id)} 
        style={{margin:0}} 
        icon={faTrash} size="2x"/>
    </div>
  )
}

const MusicComponent = () => {
  const styles = musicTableStyles()
  const [musicList, setMusicList] = useState([])
  const [modalOpen, isModalOpen] = useState(false)
  
  const addMusic = () => {
    const musics = [...musicList]
    musics.push({
      id : Date.now(),
      name : 'todo se transforma',
      author : 'jorge drexler'
    })
    setMusicList(musics)
    isModalOpen(false)
  }

  const removeMusic = (idToRemoved) => {
    const music = musicList.filter( ({id}) => idToRemoved !== id)
    setMusicList(music)
  }

  return (
    <>
    <Modal
        isOpen={modalOpen}
        onRequestClose={() => isModalOpen(false)}
        style={ModalInlineStyles}
        contentLabel="Music Modal"
      >
        <FontAwesomeIcon
          style={{cursor:'pointer'}}
          onClick={() => isModalOpen(false)} 
          icon={faClose} size="2x"/>
        
        <div 
          style={
            {
              height:200, 
              display:'flex',
              flexDirection: 'column',
              alignItems:'center',
              justifyContent: 'center'
            }
            }>
          <Input label='Nombre de la cancion'/>
          <div style={{width:'80%'}}>
            <Button
              height={45} 
              onClick={addMusic} 
              text={'Agregar'} />
          </div>

        </div> 
      </Modal>

      <Table 
        border={false} 
        tableWidth={60}>
        <div css={styles.profileHeader}>
          <div css={styles.profileNameContainer}>
            <FontAwesomeIcon icon={faMusic} size="2x"/>
            <h3>Mi musica</h3>
          </div>
          <div css={styles.buttonContainer}>
            <Button
              onClick={() => isModalOpen(true)}
              marginBottom={'0'}
              color='#673299'>
                <FontAwesomeIcon style={{margin:0}} icon={faPlus} size="2x"/>
              </Button>
          </div>
        </div>
        <Table 
          border 
          tableWidth={50}>
          <div>
            <p>Mi Informacion</p>
          </div>
          <div>
            {musicList.map(music => {
              return <MusicInfo 
                {...music}
                onDelete={(id) => removeMusic(id)} />
            })}
          </div>
        </Table>
      </Table>
    </>

  );
};

export default MusicComponent;

