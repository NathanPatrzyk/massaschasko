--
-- Banco de dados: `massaschasko`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `pagina`
--

CREATE TABLE `pagina` (
  `id` varchar(300) NOT NULL,
  `nome` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `pagina`
--

INSERT INTO `pagina` (`id`, `nome`) VALUES
('croissants', 'Croissants'),
('esfihas', 'Esfihas'),
('nhoques', 'Nhoques'),
('outros', 'Outros Produtos'),
('pierogues', 'Pierogues');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `pagina`
--
ALTER TABLE `pagina`
  ADD PRIMARY KEY (`id`);
COMMIT;