-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12/12/2023 às 21:30
-- Versão do servidor: 8.0.21
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

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
(12, 'Croissants Doces - 1,2Kg', '1,2Kg', 'croissants'),
(13, 'Outros Produtos - 400g', '400g', 'outros');

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

-- --------------------------------------------------------

--
-- Estrutura para tabela `produto`
--

CREATE TABLE `produto` (
  `id` int NOT NULL,
  `nome` varchar(200) NOT NULL,
  `titulo_da_imagem` varchar(200) DEFAULT NULL,
  `descricao` varchar(500) DEFAULT NULL,
  `mensagem_de_texto` varchar(500) DEFAULT NULL,
  `categoria_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `produto`
--

INSERT INTO `produto` (`id`, `nome`, `titulo_da_imagem`, `descricao`, `mensagem_de_texto`, `categoria_id`) VALUES
(1, 'Pierogue de Pizza', 'pierogue-de-pizza-400g.png', 'Peso líquido: 400g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Pierogue%20de%20Pizza%20400g.', 1),
(2, 'Pierogue de Batata', 'pierogue-de-batata-400g.png', 'Peso líquido: 400g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Pierogue%20de%20Batata%20400g.', 1),
(3, 'Pierogue de Frango', 'pierogue-de-frango-400g.png', 'Peso líquido: 400g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Pierogue%20de%20Frango%20400g.', 1),
(4, 'Pierogue Tradicional', 'pierogue-tradicional-400g.png', 'Peso líquido: 400g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Pierogue%20Tradicional%20400g.', 1),
(5, 'Pierogue de Calabresa', 'pierogue-de-calabresa-400g.png', 'Peso líquido: 400g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Pierogue%20de%20Calabresa%20400g.', 1),
(6, 'Pierogue de Espinafre', 'pierogue-de-espinafre-400g.png', 'Peso líquido: 400g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Pierogue%20de%20Espinafre%20400g.', 1),
(7, 'Pierogue de Requeijão', 'pierogue-de-requeijao-400g.png', 'Peso líquido: 400g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Pierogue%20de%20Requeij%C3%A3o%20400g.', 1),
(8, 'Pierogue de Feijão e Bacon', 'pierogue-de-feijao-e-bacon-400g.png', 'Peso líquido: 400g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Pierogue%20de%20Feij%C3%A3o%20e%20Bacon%20400g.', 1),
(9, 'Pierogue de Batata e Rúcula', 'pierogue-de-batata-e-rucula-400g.png', 'Peso líquido: 400g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Pierogue%20de%20Batata%20e%20R%C3%BAcula%20400g.', 1),
(10, 'Pierogue de Batata e Repolho', 'pierogue-de-batata-e-repolho-400g.png', 'Peso líquido: 400g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Pierogue%20de%20Batata%20e%20Repolho%20400g.', 1),
(11, 'Pierogue de Batata com Bacon', 'pierogue-de-batata-com-bacon-400g.png', 'Peso líquido: 400g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Pierogue%20de%20Batata%20com%20Bacon%20400g.', 1),
(12, 'Pierogue de Ricota e Tomate Seco', 'pierogue-de-ricota-e-tomate-seco-400g.png', 'Peso líquido: 400g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Pierogue%20de%20Ricota%20e%20Tomate%20Seco%20400g.', 1),
(13, 'Pierogue de Batata e Carne Desfiada', 'pierogue-de-batata-e-carne-desfiada-400g.png', 'Peso líquido: 400g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Pierogue%20de%20Batata%20e%20Carne%20Desfiada%20400g.', 1),
(14, 'Pierogue de Batata', 'pierogue-de-batata-2kg.png', 'Peso líquido: 2Kg', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Pierogue%20de%20Batata%202Kg.', 2),
(15, 'Pierogue de Frango', 'pierogue-de-frango-2kg.png', 'Peso líquido: 2Kg', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Pierogue%20de%20Frango%202Kg.', 2),
(16, 'Pierogue Tradicional', 'pierogue-tradicional-2kg.png', 'Peso líquido: 2Kg', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Pierogue%20Tradicional%202Kg.', 2),
(17, 'Pierogue de Calabresa', 'pierogue-de-calabresa-2kg.png', 'Peso líquido: 2Kg', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Pierogue%20de%20Calabresa%202Kg.', 2),
(18, 'Pierogue de Requeijão', 'pierogue-de-requeijao-2kg.png', 'Peso líquido: 2Kg', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Pierogue%20de%20Requeij%C3%A3o%202Kg.', 2),
(19, 'Pierogue de Batata com Bacon', 'pierogue-de-batata-com-bacon-2kg.png', 'Peso líquido: 2Kg', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Pierogue%20de%20Batata%20com%20Bacon%202Kg.', 2),
(20, 'Nhoque Tradicional', 'nhoque-tradicional-400g.png', 'Peso líquido: 400g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Nhoque%20Tradicional%20400g.', 3),
(21, 'Nhoque Tradicional', 'nhoque-tradicional-1kg.png', 'Peso líquido: 1Kg', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Nhoque%20Tradicional%201Kg.', 4),
(22, 'Nhoque de Espinafre', 'nhoque-de-espinafre-1kg.png', 'Peso líquido: 1Kg', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Nhoque%20de%20Espinafre%201Kg.', 4),
(23, 'Nhoque Recheado de Frango', 'nhoque-recheado-de-frango-400g.png', 'Peso líquido: 400g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Nhoque%20Recheado%20de%20Frango%20400g.', 5),
(24, 'Nhoque Recheado de Queijo', 'nhoque-recheado-de-queijo-400g.png', 'Peso líquido: 400g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Nhoque%20Recheado%20de%20Queijo%20400g.', 5),
(25, 'Nhoque Recheado de Carne Moída', 'nhoque-recheado-de-carne-moida-400g.png', 'Peso líquido: 400g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Nhoque%20Recheado%20de%20Carne%20Mo%C3%ADda%20400g.', 5),
(26, 'Nhoque Recheado de Frango', 'nhoque-recheado-de-frango-1kg.png', 'Peso líquido: 1Kg', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Nhoque%20Recheado%20de%20Frango%201Kg.', 6),
(29, 'Nhoque Recheado de Queijo', 'nhoque-recheado-de-queijo-1kg.png', 'Peso líquido: 1Kg', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Nhoque%20Recheado%20de%20Queijo%201Kg.', 6),
(30, 'Nhoque Recheado de Carne Moída', 'nhoque-recheado-de-carne-moida-1kg.png', 'Peso líquido: 1Kg', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Nhoque%20Recheado%20de%20Carne%20Mo%C3%ADda%201kg.', 6),
(31, 'Esfiha de Carne', 'esfiha-de-carne-moida-350g.png', 'Peso líquido: 350g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Esfiha%20de%20Carne%20Mo%C3%ADda%20350g.', 7),
(32, 'Esfiha de Frango', 'esfiha-de-frango-350g.png', 'Peso líquido: 350g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Esfiha%20de%20Frango%20350g.', 7),
(33, 'Esfiha de Palmito', 'esfiha-de-palmito-350g.png', 'Peso líquido: 350g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Esfiha%20de%20Palmito%20350g.', 7),
(34, 'Esfiha Multigrãos', 'esfiha-multigraos-350g.png', 'Peso líquido: 350g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Esfiha%20Multigr%C3%A3os%20350g.', 7),
(35, 'Esfiha Sabor Pizza', 'esfiha-sabor-pizza-350g.png', 'Peso líquido: 350g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Esfiha%20Sabor%20Pizza%20350g.', 7),
(36, 'Croissant Sabor Pizza', 'croissant-sabor-pizza-350g.png', 'Peso líquido: 350g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Croissant%20Sabor%20Pizza%20350g.', 8),
(37, 'Croissant de Carne', 'croissant-de-carne-350g.png', 'Peso líquido: 350g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Croissant%20de%20Carne%20350g.', 8),
(38, 'Croissant de Frango', 'croissant-de-frango-350g.png', 'Peso líquido: 350g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Croissant%20de%20Frango%20350g.', 8),
(39, 'Croissant de Palmito', 'croissant-de-palmito-350g.png', 'Peso líquido: 350g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Croissant%20de%20Palmito%20350g.', 8),
(40, 'Croissant de Chocolate Preto', 'croissant-de-chocolate-preto-350g.png', 'Peso líquido: 350g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Croissant%20de%20Chocolate%20Preto%20350g.', 9),
(41, 'Croissant de Banana com Canela', 'croissant-de-banana-com-canela-350g.png', 'Peso líquido: 350g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Croissant%20de%20Banana%20com%20Canela%20350g.', 9),
(42, 'Croissant Sabor Pizza', 'croissant-sabor-pizza-1,2kg.png', 'Peso líquido: 1,2Kg', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Croissant%20Sabor%20Pizza%201,2Kg.', 11),
(43, 'Croissant de Frango', 'croissant-de-frango-1,2kg.png', 'Peso líquido: 1,2Kg', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Croissant%20de%20Frango%201,2Kg.', 11),
(44, 'Croissant de Carne', 'croissant-de-carne-1,2kg.png', 'Peso líquido: 1,2Kg', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Croissant%20de%20Carne%201,2Kg.', 11),
(45, 'Croissant de Chocolate Preto', 'croissant-de-chocolate-preto-1,2kg.png', 'Peso líquido: 1,2Kg', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Croissant%20de%20Chocolate%20Preto%201,2Kg.', 12),
(46, 'Esfiha de Frango', 'esfiha-de-frango-1,2kg.png', 'Peso líquido: 1,2Kg', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Esfiha%20de%20Frango%201,2Kg.', 10),
(47, 'Esfiha de Carne', 'esfiha-de-carne-moida-1,2kg.png', 'Peso líquido: 1,2Kg', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Esfiha%20de%20Carne%201,2Kg.', 10),
(48, 'Charuto de Repolho', 'charuto-de-repolho-400g.png', 'Peso líquido: 400g', 'Ol%C3%A1,%20estou%20interessado%20no%20produto:%20Charuto%20de%20Repolho%20400g.', 13);

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
-- Índices de tabela `pagina`
--
ALTER TABLE `pagina`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoria_id` (`categoria_id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `categoria`
--
ALTER TABLE `categoria`
  ADD CONSTRAINT `categoria_ibfk_1` FOREIGN KEY (`pagina_id`) REFERENCES `pagina` (`id`);

--
-- Restrições para tabelas `produto`
--
ALTER TABLE `produto`
  ADD CONSTRAINT `produto_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
