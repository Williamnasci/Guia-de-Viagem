# 🌍 EU Mobility Hub - Guia de Viagem

Um guia interativo, construído com **Next.js**, para ajudar estudantes em mobilidade acadêmica na União Europeia. O projeto oferece informações essenciais sobre **documentação, hospedagem, custo de vida, transporte e uma galeria de fotos**.

-----

## 🚀 Tecnologias Utilizadas

  * **Next.js** (React framework)
  * **TypeScript**
  * **Tailwind CSS** (com design tokens customizados)
  * **shadcn/ui** (biblioteca de componentes acessíveis)
  * **ESLint + Prettier** (qualidade de código)
  * **next-themes** (dark mode)
  * **Unsplash API** (integração opcional para a galeria de fotos)

-----

## ✨ Funcionalidades

  * 📄 **Documentação**: Guia para passaporte, visto, seguro saúde e outros documentos.
  * 💰 **Custo de Vida**: Comparação de preços por categoria.
  * 🏠 **Hospedagem**: Dicas sobre dormitórios, aluguel e plataformas confiáveis.
  * ✈️ **Transporte Aéreo**: Sugestões e boas práticas.
  * 📸 **Galeria de Fotos**: Integração opcional com a API do Unsplash.
  * 🌗 **Dark Mode**: Alterna entre os temas claro e escuro.

-----

## ⚡ Instalação e Uso

Para começar, siga estes passos:

1.  Clone o repositório:
    ```bash
    git clone https://github.com/Williamnasci/Guia-de-Viagem.git
    ```
2.  Entre na pasta do projeto:
    ```bash
    cd Guia-de-Viagem
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Rode a aplicação em modo de desenvolvimento:
    ```bash
    npm run dev
    ```

Acesse o projeto em `http://localhost:3000`.

### 📸 Galeria de Fotos (Opcional)

Se você quiser incluir a galeria de fotos, é necessário integrar a API do Unsplash. Siga estas instruções:

1.  Crie uma conta em [Unsplash Developers](https://unsplash.com/developers).
2.  Crie uma nova aplicação e copie sua **Access Key**.
3.  Crie um arquivo `.env.local` na raiz do projeto e adicione sua chave de acesso:
    ```env
    NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=YOUR_ACCESS_KEY
    ```

-----

## 📂 Estrutura de Pastas

```
src/
├─ components/     # Componentes reutilizáveis (botões, cards, headers, footers)
│  └─ ui/          # Componentes shadcn/ui
├─ layouts/        # Layouts globais (MainLayout)
├─ pages/          # Páginas do Next.js (Home, Documentação, Hospedagem, etc.)
├─ styles/         # Estilos globais e tokens (Tailwind + CSS customizado)
├─ lib/            # Funções utilitárias e helpers (ex: fetchPhotos, cn)
├─ types/          # Definições de tipos TypeScript
├─ constants/      # Dados estáticos e textos
public/            # Imagens públicas (passaporte.png, skyline.png, preview.png)
```

-----

## 📦 Deploy

O projeto está configurado para deploy no Vercel.

1.  Execute o comando de build:
    ```bash
    npm run build
    ```
2.  Conecte o repositório ao Vercel para o deploy automático.

-----

## 📝 Licença

Este projeto está sob a **Licença MIT**. Sinta-se à vontade para usá-lo e modificá-lo.

-----

## 👨‍💻 Autor

**William Nascimento** 🚀
