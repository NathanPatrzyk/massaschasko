#!/bin/bash

# Define o diretório base do script para evitar problemas de caminho
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
 
echo "Iniciando o Drizzle Studio..."
(cd "$SCRIPT_DIR/massaschasko-api" && npm run db:studio) &
DRIZZLE_STUDIO_PID=$!
 
echo "Iniciando o backend..."
(cd "$SCRIPT_DIR/massaschasko-api" && npm run dev) &
BACKEND_PID=$!
 
echo "Iniciando o frontend..."
(cd "$SCRIPT_DIR/massaschasko-react" && npm run dev) &
FRONTEND_PID=$!
 
echo "Abrindo o projeto no VSCode..."
(code .)

echo "Abrindo localhost:5173 no navegador..."
(xdg-open http://localhost:5173/)
 
cleanup() {
  echo "Encerrando os processos..."
  kill $DRIZZLE_STUDIO_PID $BACKEND_PID $FRONTEND_PID 2>/dev/null
}
 
trap cleanup EXIT
 
echo "Aplicação rodando. Pressione Ctrl+C para parar."
wait