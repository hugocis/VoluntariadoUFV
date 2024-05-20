import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ethers } from 'ethers';
import { provider } from './config';
import ERC1155ABI from './ERC1155ABI';

const contractAddress = "0x073950a7AB2AF75701592d437F2c380d561b7e04"; // Dirección de tu contrato

const gradientBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #2d8bbf, #f2a365);
  background-size: 200% 200%;
  animation: ${gradientBackground} 10s ease infinite;
  color: #ffffff;
  min-height: 100vh;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 3em;
  margin: 0.5em 0;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
  font-style: italic;
  text-shadow: 2px 2px #000000;
  z-index: 10;
`;

const Section = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin: 10px 0;
  width: 90%;
  max-width: 500px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const Input = styled.input`
  width: calc(100% - 22px);
  padding: 10px;
  margin: 5px 0;
  border: none;
  border-radius: 5px;
  font-size: 1em;
`;

const Button = styled.button`
  background: #2d8bbf;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #f2a365;
  }
`;

const Alert = styled.div`
  background: #f2a365;
  color: #ffffff;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 10;
`;

const NFTList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 10;
`;

const NFTItem = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 150px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const App = () => {
  const [account, setAccount] = useState(null);
  const [owner, setOwner] = useState(null);
  const [paused, setPaused] = useState(false);
  const [uris, setUris] = useState([]);
  const [isOwner, setIsOwner] = useState(false);
  const [mintedNfts, setMintedNfts] = useState([]);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState(0);
  const [tokenId, setTokenId] = useState(1); // Default token ID
  const [mintAmount, setMintAmount] = useState(0);
  const [ids, setIds] = useState([]);
  const [amounts, setAmounts] = useState([]);
  const [approval, setApproval] = useState(false);
  const [newOwner, setNewOwner] = useState('');
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState('');
  const [uri, setUri] = useState(''); // Añadido estado para URI

  const nftImages = {
    1: 'https://raw.githubusercontent.com/JLDSjr/metadata_blockchain/main/abuelos.png',
    2: 'https://raw.githubusercontent.com/JLDSjr/metadata_blockchain/main/adolescentes.png',
    3: 'https://raw.githubusercontent.com/JLDSjr/metadata_blockchain/main/comida.png',
    4: 'https://raw.githubusercontent.com/JLDSjr/metadata_blockchain/main/animales.jpeg'
  };

  useEffect(() => {
    const connectWallet = async () => {
      try {
        if (window.ethereum) {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setAccount(accounts[0]);
        } else {
          console.error("MetaMask no está instalado");
        }
      } catch (error) {
        if (error.code === -32002) {
          console.error("Solicitud de conexión ya está pendiente.");
        } else {
          console.error("Error al solicitar acceso a las cuentas:", error);
        }
        setError(error);
      }
    };

    const fetchData = async () => {
      try {
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, ERC1155ABI, signer);

        const contractOwner = await contract.owner();
        setOwner(contractOwner);
        setIsOwner(contractOwner.toLowerCase() === account.toLowerCase());

        const pausedState = await contract.paused();
        setPaused(pausedState);

        const urisData = [];
        for (let id = 1; id <= 4; id++) { // Aumentamos el rango a 4
          const tokenUri = await contract.uri(id);
          urisData.push({ id, uri: tokenUri });
        }
        setUris(urisData);

        const balances = [];
        for (let id = 1; id <= 4; id++) { // Aumentamos el rango a 4
          const balance = await contract.balanceOf(account, id);
          if (balance > 0) {
            balances.push({ id, balance: balance.toString() });
          }
        }
        setMintedNfts(balances);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };

    if (account) {
      fetchData();
    } else {
      connectWallet();
    }
  }, [account]);

  const handleTransfer = async () => {
    try {
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, ERC1155ABI, signer);
      const tx = await contract.safeTransferFrom(account, recipient, tokenId, amount, '0x');
      await tx.wait();
      setAlert('Transferencia completada');
      // Actualiza el balance después de la transferencia
      const balance = await contract.balanceOf(account, tokenId);
      setMintedNfts(mintedNfts.map(nft => nft.id === tokenId ? { ...nft, balance: balance.toString() } : nft));
    } catch (error) {
      console.error(error);
      setError(error);
      setAlert('Error en la transferencia');
    }
  };

  const handleMint = async () => {
    try {
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, ERC1155ABI, signer);
      const tx = await contract.mint(account, tokenId, mintAmount, '0x');
      await tx.wait();
      setAlert('Mint completado');
      // Actualiza el balance después del mint
      const balance = await contract.balanceOf(account, tokenId);
      setMintedNfts(mintedNfts.map(nft => nft.id === tokenId ? { ...nft, balance: balance.toString() } : nft));
    } catch (error) {
      console.error(error);
      setError(error);
      setAlert('Error en el mint');
    }
  };

  const handleMintBatch = async () => {
    try {
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, ERC1155ABI, signer);
      const tx = await contract.mintBatch(account, ids, amounts, '0x');
      await tx.wait();
      setAlert('Mint Batch completado');
    } catch (error) {
      console.error(error);
      setError(error);
      setAlert('Error en el mint batch');
    }
  };

  const handleSetURI = async () => {
    try {
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, ERC1155ABI, signer);
      const tx = await contract.setURI(uri);
      await tx.wait();
      setAlert('URI actualizado');
    } catch (error) {
      console.error(error);
      setError(error);
      setAlert('Error en la actualización del URI');
    }
  };

  const handlePause = async () => {
    try {
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, ERC1155ABI, signer);
      const tx = await contract.pause();
      await tx.wait();
      setPaused(true);
      setAlert('Contrato pausado');
    } catch (error) {
      console.error(error);
      setError(error);
      setAlert('Error al pausar el contrato');
    }
  };

  const handleUnpause = async () => {
    try {
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, ERC1155ABI, signer);
      const tx = await contract.unpause();
      await tx.wait();
      setPaused(false);
      setAlert('Contrato despausado');
    } catch (error) {
      console.error(error);
      setError(error);
      setAlert('Error al despausar el contrato');
    }
  };

  const handleSetApprovalForAll = async () => {
    try {
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, ERC1155ABI, signer);
      const tx = await contract.setApprovalForAll(recipient, approval);
      await tx.wait();
      setAlert(`Aprobación ${approval ? 'concedida' : 'revocada'} para ${recipient}`);
    } catch (error) {
      console.error(error);
      setError(error);
      setAlert('Error al establecer la aprobación');
    }
  };

  const handleTransferOwnership = async () => {
    try {
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, ERC1155ABI, signer);
      const tx = await contract.transferOwnership(newOwner);
      await tx.wait();
      setAlert(`Propiedad transferida a ${newOwner}`);
      setOwner(newOwner);
    } catch (error) {
      console.error(error);
      setError(error);
      setAlert('Error al transferir la propiedad');
    }
  };

  return (
    <Container>
      <Title>VoluntariadoUFV</Title>
      {error && <Alert>Error: {error.message}</Alert>}
      {alert && <Alert>{alert}</Alert>}
      {account ? (
        <>
          <Section>
            <p><strong>Owner:</strong> {owner}</p>
            <p><strong>Paused:</strong> {paused ? "Yes" : "No"}</p>
            <p><strong>Account:</strong> {account}</p>
          </Section>
          <Section>
            <h2>Transferir Tokens</h2>
            <Input type="text" placeholder="Dirección del destinatario" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
            <Input type="number" placeholder="Cantidad" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <Input type="number" placeholder="ID del Token" value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
            <Button onClick={handleTransfer}>Transferir</Button>
          </Section>
          {isOwner && (
            <>
              <Section>
                <h2>Mint Tokens</h2>
                <Input type="number" placeholder="ID del Token" value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
                <Input type="number" placeholder="Cantidad" value={mintAmount} onChange={(e) => setMintAmount(e.target.value)} />
                <Button onClick={handleMint}>Mint</Button>
              </Section>
              <Section>
                <h2>Mint Batch Tokens</h2>
                <Input type="text" placeholder="IDs (separados por comas)" onChange={(e) => setIds(e.target.value.split(',').map(Number))} />
                <Input type="text" placeholder="Cantidades (separadas por comas)" onChange={(e) => setAmounts(e.target.value.split(',').map(Number))} />
                <Button onClick={handleMintBatch}>Mint Batch</Button>
              </Section>
              <Section>
                <h2>Set URI</h2>
                <Input type="text" placeholder="Nuevo URI" value={uri} onChange={(e) => setUri(e.target.value)} />
                <Button onClick={handleSetURI}>Actualizar URI</Button>
              </Section>
              <Section>
                <h2>Control de Pausa</h2>
                {paused ? (
                  <Button onClick={handleUnpause}>Despausar</Button>
                ) : (
                  <Button onClick={handlePause}>Pausar</Button>
                )}
              </Section>
              <Section>
                <h2>Establecer Aprobación para Todos</h2>
                <Input type="text" placeholder="Dirección del operador" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
                <Input type="checkbox" checked={approval} onChange={(e) => setApproval(e.target.checked)} />
                <label>Aprobación</label>
                <Button onClick={handleSetApprovalForAll}>Establecer Aprobación</Button>
              </Section>
              <Section>
                <h2>Transferir Propiedad</h2>
                <Input type="text" placeholder="Nueva dirección del propietario" value={newOwner} onChange={(e) => setNewOwner(e.target.value)} />
                <Button onClick={handleTransferOwnership}>Transferir Propiedad</Button>
              </Section>
            </>
          )}
          <Section>
            <h2>Mis NFTs Minteados</h2>
            <NFTList>
              {mintedNfts.map((nft) => (
                <NFTItem key={nft.id}>
                  <Image src={nftImages[nft.id]} alt={`NFT ${nft.id}`} />
                  <p>ID: {nft.id}</p>
                  <p>Balance: {nft.balance}</p>
                </NFTItem>
              ))}
            </NFTList>
          </Section>
        </>
      ) : (
        <p>Conectando a MetaMask...</p>
      )}
    </Container>
  );
};

export default App;
