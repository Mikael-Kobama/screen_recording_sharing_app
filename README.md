# 🎥 SnapCast - Plataforma de Gravação de Tela e Compartilhamento de Vídeos

<div align="center">
  <p><b>Desenvolvido por Mikael Kobama</b> — Baseado e inspirado no tutorial do canal <i>JavaScript Mastery</i></p>

  <div>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="next.js" />
    <img src="https://img.shields.io/badge/Bunny.net-F47326?style=for-the-badge&logo=bunnyvideo&logoColor=white" alt="bunny.net">
    <img src="https://img.shields.io/badge/-Tailwind-00BCFF?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind" />
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
  </div>
</div>

---

## 🤖 Sobre o Projeto

O **SnapCast** é uma plataforma Full Stack que permite aos usuários gravar a tela do computador diretamente pelo navegador, realizar o upload desses vídeos de forma integrada e compartilhá-los instantaneamente por meio de links únicos.

O projeto conta com controle de privacidade (vídeos públicos ou privados), transcrição automática das falas com Inteligência Artificial e uma camada robusta de segurança.

> **Créditos:** Este projeto foi desenvolvido por mim (**Mikael Kobama**), seguindo as melhores práticas de mercado e totalmente inspirado no material de excelência publicado pelo canal **JavaScript Mastery**.

---

## ⚡ Funcionalidades Principais

- **Autenticação Segura:** Login social (Google) e tradicional utilizando a biblioteca _Better Auth_.
- **Gravação de Tela Nativa:** Captura de vídeo diretamente da aplicação web, sem necessidade de extensões externas.
- **Hospedagem e Streaming:** Upload eficiente e distribuição global de vídeos através da infraestrutura da _Bunny.net_.
- **Transcrições com IA:** Geração automática do texto falado nos vídeos para acessibilidade e buscas.
- **Controle de Privacidade:** Opção para alternar a visibilidade dos vídeos entre público ou privado.
- **Segurança Avançada:** Proteção contra bots, ataques maliciosos e limite de requisições com _Arcjet_.
- **Busca Avançada:** Barra de pesquisa intuitiva para localizar conteúdos rapidamente.

---

## ⚙️ Tecnologias Utilizadas

- **Next.js (App Router):** Framework React para renderização ágil no servidor e rotas de API.
- **Bunny.net:** CDN e plataforma de streaming otimizada para armazenamento de vídeos.
- **Better Auth:** Biblioteca TypeScript-first para gerenciamento seguro de sessões.
- **Xata & Drizzle ORM:** Banco de dados PostgreSQL serverless aliado a um ORM totalmente type-safe.
- **Arcjet:** Ferramenta focada em segurança de endpoints e controle de tráfego.
- **Tailwind CSS:** Criação de uma interface de usuário moderna, limpa e responsiva.

---

## 🚀 Como Executar Localmente

### Pré-requisitos

Certifique-se de ter instalado: [Git](https://git-scm.com/), [Node.js](https://nodejs.org/) e gerenciador de pacotes npm.

### 1. Clonar e Instalar

```bash
git clone [https://github.com/seu-usuario/screen_recording_sharing_app.git](https://github.com/seu-usuario/screen_recording_sharing_app.git)
cd screen_recording_sharing_app
npm install
```
