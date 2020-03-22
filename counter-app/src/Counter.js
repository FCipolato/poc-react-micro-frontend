import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput } from 'reactstrap';
// import ModalImg from './modal.png';

const Counter = (props) => {
  const {
    className,
    token,
  } = props;
  const [modal, setModal] = useState(false);

  useEffect(() => {
    token === "QpwL5tke4Pnpja7X4" ? setModal(true) : setModal(false);
    console.log('entrou')

    //console.log('localStorage.getItem("@test-Token")', localStorage.getItem("@test-Token"))
    //localStorage.getItem("@test-Token") === "QpwL5tke4Pnpja7X4" ? setModal(true) : setModal(false);
    //window.addEventListener('itemInserted', () => console.log('mudou'), false)
  }, []);

  const styleModal = {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'height': '93%',
  };

  const styleModalBody = {
    'display': 'flex',
    'flex-direction': 'column',
  };

  const styleDiv = {
    'display': 'flex',
    'justify-content': 'space-between',
    'padding-left': '2rem',
  };

  const styleH2 = {
    'margin-bottom': '3rem',
  };

  const toggle = () => setModal(!modal);

  return (
    <Modal isOpen={modal} toggle={toggle} className={className} style={styleModal} backdrop="static">
      <ModalHeader toggle={toggle}>Consentimento</ModalHeader>
      <ModalBody style={styleModalBody}>
        {/*<img src={ModalImg} alt={'imagem'} />*/}
        <h2 style={styleH2}>Serviços</h2>
        <div style={styleDiv}>
          <p>Marketing Direto</p>
          <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" />
        </div>
        <div style={styleDiv}>
          <p>Cookies</p>
          <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" />
        </div>
        <div style={styleDiv}>
          <p>Geolocalização</p>
          <CustomInput type="switch" id="exampleCustomSwitch3" name="customSwitch" />
        </div>
        <div style={styleDiv}>
          <p>Compartilhamento de dados com terceiros</p>
          <CustomInput type="switch" id="exampleCustomSwitch4" name="customSwitch" />
        </div>
        <div style={styleDiv}>
          <p>Autorização para uso de dados de menores e adolescentes</p>
          <CustomInput type="switch" id="exampleCustomSwitch5" name="customSwitch" />
        </div>
        <div style={styleDiv}>
          <p>Dados sensíveis</p>
          <CustomInput type="switch" id="exampleCustomSwitch6" name="customSwitch" />
        </div>
        <div style={styleDiv}>
          <p>Seu token é: {token}</p>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Cancelar</Button>
        <Button color="primary" onClick={toggle}>Salvar Alterações</Button>
      </ModalFooter>
    </Modal>
  );
}

export default Counter;
