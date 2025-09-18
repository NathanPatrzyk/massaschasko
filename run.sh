#!/bin/bash

# Define o diretório base do script para evitar problemas de caminho
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# Inicia o frontend (React) em segundo plano
echo "Iniciando o frontend..."
(cd "$SCRIPT_DIR/massaschasko-react" && npm run dev) &
FRONTEND_PID=$!

# Inicia o backend (Cloudflare Worker) em segundo plano
echo "Iniciando o backend..."
(cd "$SCRIPT_DIR/massaschasko-api" && npm run dev) &
BACKEND_PID=$!

# Função para garantir que os processos sejam encerrados
cleanup() {
  echo "Encerrando os processos..."
  kill $FRONTEND_PID $BACKEND_PID 2>/dev/null
}

# Configura a armadilha (trap) para o comando Ctrl+C ou encerramento
trap cleanup EXIT

# Mantém o script em execução enquanto os processos filhos estiverem ativos
echo "Aplicação rodando. Pressione Ctrl+C para parar."
wait