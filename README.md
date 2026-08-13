# Site — Clínica PIO (proposta)

Landing page de página única para a Clínica PIO (Londrina - PR).
Site estático: **um único arquivo HTML**, sem build, sem dependências para instalar.

---

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (pode ser público ou privado — o Pages funciona nos dois em contas Pro; em conta gratuita, precisa ser **público**).
2. Envie o conteúdo desta pasta para a raiz do repositório (`index.html`, `styles.css` e este `README.md`).
3. No repositório, vá em **Settings → Pages**.
4. Em **Source**, escolha **Deploy from a branch**.
5. Em **Branch**, selecione `main` e a pasta `/ (root)`. Clique em **Save**.
6. Aguarde 1 a 2 minutos. O link aparece no topo da mesma página, no formato:
   `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`

> O arquivo **precisa** se chamar `index.html` e estar na raiz — é o que o GitHub Pages procura.

### Pelo terminal (alternativa ao upload manual)

```bash
git init
git add .
git commit -m "Site Clinica PIO"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main
```

Depois siga os passos 3 a 6 acima.

---

## Alternativa mais rápida: Netlify Drop

Se o objetivo é só ter um link para mostrar ao cliente, é mais rápido:

1. Acesse `app.netlify.com/drop`
2. Arraste esta pasta inteira para a área indicada
3. O link sai na hora

Dá para trocar o endereço por um nome melhor em *Site settings → Change site name*.

---

## Antes de mandar o link para o cliente

- [ ] **Confirmar a ordem das 5 fotos do "Sobre a clínica".** Estão na ordem fachada → recepção → sala de espera → sala de atendimento → sala de fotodepilação. Ver a seção "Fotos do Sobre a clínica", mais abaixo.
- [ ] **Fechar as fotos da faixa de destaque.** É a faixa larga no topo da página (`#destaque`), com as fotos passando de ponta a ponta. São **4 fotos, e esse é o limite definido pela clínica** — e só de **tratamento**: foto do ambiente não entra nesta faixa. O formato ideal é **1440×576 (proporção 5:2)** — nessa medida a foto aparece inteira, sem corte. Para trocar uma, substitua o `src` do bloco `<div class="destaque-slide">` correspondente.
- [ ] **Trocar as imagens de exemplo.** Sobraram **12** imagens vindas do `placehold.co`, todas no carrossel de antes e depois (os retângulos escritos "ANTES" e "DEPOIS"). Procure por `placehold.co` no `index.html` e substitua pelas fotos reais. As demais seções já estão com foto de verdade.
- [ ] **Montar o carrossel de antes e depois.** São 6 casos (Criolipólise, Hidrolipoclasia, Preenchimento facial, Peeling coreano, Harmonização do sorriso e Fotodepilação), cada um com um par de fotos. As duas fotos de cada par **precisam ter o mesmo enquadramento, distância e iluminação** — é isso que faz a comparação funcionar. Para incluir ou remover um caso, basta duplicar ou apagar um bloco `<div class="ba-slide">`: as bolinhas, o contador e as setas se ajustam sozinhos.
- [ ] **Conferir a autorização de uso de imagem** dos pacientes antes de publicar qualquer antes e depois.
- [ ] **Confirmar os preços dos cursos.** Os valores em `cursos.html` foram copiados do site atual da clínica e podem estar desatualizados — publicar preço errado gera problema com o consumidor.
- [ ] **Conferir a equipe.** A seção `#equipe` e o painel "Ver equipe completa" listam hoje 2 profissionais (Dr. Adriano Zanutto e Rayane Cristina). Confirmar nomes, cargos e a grafia dos títulos profissionais, e avisar se entrar mais alguém — os dois blocos ficam no `index.html` e precisam ser atualizados juntos.
- [ ] **Pedir o arquivo original da logo** à clínica. O `logo-pio.svg` daqui foi tirado do site atual deles e é uma imagem embutida (não é vetor de verdade), então perde nitidez se for muito ampliada.
- [ ] **Revisar os textos dos tratamentos** com a responsável técnica. Foram parafraseados das páginas do site atual e envolvem alegações de saúde — as regras de publicidade dos conselhos (CFM, CRO, CREFITO) são rígidas quanto a prometer resultado.
- [ ] **Conferir a nota do Google.** O site afirma "4,8 / 5,0 · +120 avaliações no Google" na seção hero. Confirme no perfil real da clínica antes de publicar.
- [ ] **Trocar os 3 depoimentos de exemplo.** A seção tem 4 cards. O primeiro (Rosangela Glasses) é uma avaliação **real**, copiada do Google Maps. Os 3 seguintes (Débora F., Eliziane A. e Berenice L.) são **textos de demonstração — clientes inventados**, marcados com comentário no HTML. Precisam ser substituídos por avaliações verdadeiras antes de o site entrar no ar: publicar depoimento fabricado é propaganda enganosa (CDC, art. 37).
- [ ] **Revisar o conteúdo do blog.** Os três artigos foram escritos a partir das publicações do site atual. O texto de "Bum bum na nuca" foi ampliado (o original era só um anúncio) e o de hidrolipoclasia ganhou informações complementares — vale passar pela responsável técnica antes de publicar, por serem alegações de saúde.
- [ ] **Comprimir as fotos** antes de subir (WebP ou JPG, largura máxima ~1600px). O site é leve hoje; fotos pesadas jogam essa vantagem fora.

---

## Paleta

Definida em `:root`, no topo do `styles.css`. Para mudar qualquer cor do site, altere ali — nada é escrito "na mão" nas regras.

| Variável | Cor | Onde aparece |
|---|---|---|
| `--lilac-700` | `#8a6395` | detalhes e apoio das faixas escuras |
| `--lilac-500` | `#c199cb` | detalhes, gradientes e traços decorativos |
| `--lilac-300` | `#e2ccea` | ponta "roxa" do fade das seções |
| `--lilac-200` | `#eddef2` | meio do fade |
| `--lilac-100` | `#f6ecf9` | meio do fade nas seções mais lavadas |
| `--pink-300` | `#f9bcd9` | ponta "rosa" do fade forte (hero e depoimentos) |
| `--pink-200` | `#fcd3e6` | chips de ícone, campos e detalhes sobre fundo escuro |
| `--pink-100` | `#fdeaf3` | ponta rosa do fade das seções |
| `--pink-050` | `#fff5fa` | ponta rosa do fade nas seções mais lavadas |
| `--cream` | `#fff8fc` | fundo geral da página |

**O roxo escuro (`--purple-900`, `--purple-800`, `--purple-700`) ficou reservado** aos botões de agendamento, aos títulos e aos links. É ele que faz o CTA saltar da tela — se for usado como fundo de seção, esse contraste se perde.

`--star` (`#bd7f15`) é usado só nas estrelinhas de avaliação.

### O fade horizontal

Nenhuma seção tem fundo chapado: cada uma recebe um degradê que atravessa a
tela **da esquerda para a direita**, e o sentido **inverte de uma seção para a
outra** (rosa claro → roxo claro, roxo claro → rosa claro, e assim por diante
até o rodapé). É o que dá o efeito de onda de cor ao rolar a página.

Os degradês estão em seis tokens no `:root`, sempre em pares de sentido oposto:

| Token | Uso |
|---|---|
| `--fade-a` / `--fade-b` | intensidade padrão (tratamentos, quiz, blog) |
| `--fade-suave-a` / `--fade-suave-b` | versão lavada, para as seções com muito texto |
| `--fade-forte-a` / `--fade-forte-b` | versão saturada (hero, resultados, depoimentos) |
| `--fade-escuro-a` / `--fade-escuro-b` | faixas escuras (marquee, banner de CTA, card de contato e rodapé) |

A distribuição seção a seção fica logo abaixo da regra do `body`, num bloco
comentado com a ordem da página. Para trocar o efeito inteiro, mexa só nos
tokens; para trocar uma seção de sentido, troque o `-a` pelo `-b` nesse bloco.

## Tipografia

A base é **17px** (`html{font-size:106.25%}`), não os 16px padrão do navegador. Como todos os tamanhos do site são em `rem`, mudar esse único valor aumenta ou diminui o texto da página inteira de uma vez.

**O site não usa itálico em lugar nenhum** — por pedido da clínica. A regra `em{font-style:normal}` garante isso mesmo se alguém colar um `<em>` novo, e a fonte Cormorant é carregada sem o eixo itálico.

## Estrutura

```
index.html    página principal — marcação e JavaScript (no fim do arquivo)
cursos.html   página de cursos
equipe.html   página da equipe
styles.css    todo o CSS das três páginas
logo-pio.svg  logo da clínica (cabeçalho e rodapé)
README.md     este arquivo
```

O cabeçalho e o rodapé estão **repetidos nos três arquivos** — é site estático, sem
sistema de templates. Ao mudar um item de menu ou um dado de contato, altere nos três.

A logo é roxa. No rodapé, que tem fundo escuro, ela é deixada branca por CSS
(`filter:brightness(0) invert(1)`) — não existe um segundo arquivo de logo.

Os cards de tratamento e os do blog usam o **mesmo componente de painel**
(`initExpandingGrid`, no fim do `index.html`): o texto abre na própria página,
embaixo da linha do card clicado. Cada card guarda o próprio conteúdo numa
`<div class="post-content">` — para editar um texto, mexa só nesse bloco.

Os dois arquivos precisam ficar **na mesma pasta** — o `index.html` chama o CSS por caminho
relativo (`<link rel="stylesheet" href="styles.css">`). Se separar um do outro, o site abre
sem estilo nenhum.

Recursos externos carregados via CDN (funcionam normalmente em HTTPS):

- Google Fonts — Cormorant Garamond e Poppins
- Remix Icon 3.5.0 — biblioteca de ícones
- placehold.co — apenas as imagens de exemplo, a serem substituídas

### Seções

`#destaque` (faixa de fotos grandes de ponta a ponta) · `#hero` (a parte escrita: título, chamada e números) · `#sobre` · `#tratamentos` (com filtro por categoria) · `#resultados` (carrossel de antes e depois) · `#equipe` · `#cursos` · quiz "Descubra o seu" · `#diferenciais` · `#depoimentos` · Instagram · `#blog` (artigos abrem na própria página) · `#contato` (formulário que envia para o WhatsApp) · rodapé

Os três carrosséis de fotos (`#destaque`, `#sobre` e o de antes e depois)
compartilham a mesma mecânica de arraste, setas e bolinhas — a função
`montarCarrosselFotos` no fim do `index.html` monta os dois primeiros, mudando
só o prefixo das classes (`destaque-` e `about-`).

**Os dois giram sozinhos de 5 em 5 segundos, sem parar nunca**, dando a volta
no fim. Seta, bolinha, arraste e teclado não interrompem o giro: só reiniciam
a contagem dos 5 segundos, para a foto não trocar logo depois do toque. A
única exceção é o visitante que pede menos animação no sistema
(`prefers-reduced-motion`) — aí o giro automático não começa, e ele navega
pelas setas. Para mudar o intervalo, procure por `5000` dentro de
`montarCarrosselFotos`.

### Fotos do "Sobre a clínica"

São 5, **nesta ordem**, e a ordem é definida pela clínica:

| # | Arquivo | Foto | Original |
|---|---|---|---|
| 1 | `images/sobre-1-fachada.webp` | fachada, na Rua Ibiporã, 426 | 1200×1600, em pé |
| 2 | `images/sobre-2-recepcao.webp` | recepção | 960×1280, em pé |
| 3 | `images/sobre-3-sala-de-espera.webp` | sala de espera | 1280×960, deitada |
| 4 | `images/sobre-4-sala-de-atendimento.webp` | sala de atendimento | 1280×960, deitada |
| 5 | `images/sobre-5-fotodepilacao.webp` | sala de fotodepilação | 960×1280, em pé |

A moldura é **quadrada (1:1)** de propósito: as fotos vieram misturadas (três
em pé, duas deitadas), e no quadrado todas perdem a mesma fatia — 12,5% de
cada lado — em vez de uma das orientações ficar mutilada. Se um dia todas as
fotos forem da mesma orientação, vale voltar `.about-slide` para `3/4` (em pé)
ou `4/3` (deitada) no `styles.css`.

São os únicos arquivos **`.webp`** do site (os demais são `.jpg`/`.jpeg`). É de
propósito: já chegaram nesse formato, entre 93 KB e 332 KB, e com resolução de
1,9× a 2,4× o tamanho da moldura — ou seja, nítidas até em tela retina, sem
precisar comprimir nada. WebP é lido por todos os navegadores atuais.

### Contatos configurados no site

WhatsApp: `5543991656200` — aparece no botão flutuante, no quiz e no formulário de contato.
Para trocar, procure por `wa.me/5543991656200` no arquivo.
