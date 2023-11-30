--
-- Banco de dados: `massaschasko`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `categoria`
--

CREATE TABLE `categoria` (
  `id` int NOT NULL,
  `nome` varchar(200) NOT NULL,
  `peso` varchar(50) DEFAULT NULL,
  `pagina_id` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `categoria`
--

INSERT INTO `categoria` (`id`, `nome`, `peso`, `pagina_id`) VALUES
(1, 'Pierogues - 400g', '400g', 'pierogues'),
(2, 'Pierogues - 2Kg', '2Kg', 'pierogues'),
(3, 'Nhoques - 400g', '400g', 'nhoques'),
(4, 'Nhoques - 1Kg', '1Kg', 'nhoques'),
(5, 'Nhoques Recheados - 400g', '400g', 'nhoques'),
(6, 'Nhoques Recheados - 1Kg', '1Kg', 'nhoques'),
(7, 'Esfihas - 350g', '350g', 'esfihas'),
(8, 'Croissants - 350g', '350g', 'croissants'),
(9, 'Croissants Doces - 350g', '350g', 'croissants'),
(10, 'Esfihas - 1,2Kg', '1,2Kg', 'esfihas'),
(11, 'Croissants - 1,2Kg', '1,2Kg', 'croissants'),
(12, 'Croissants Doces - 1,2Kg', '1,2Kg', 'croissants');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pagina_id` (`pagina_id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `categoria`
--
ALTER TABLE `categoria`
  ADD CONSTRAINT `categoria_ibfk_1` FOREIGN KEY (`pagina_id`) REFERENCES `pagina` (`id`);
COMMIT;