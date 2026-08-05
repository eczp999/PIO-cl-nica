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

- [ ] **Montar o carrossel de fotos do hero.** São 5 fotos da clínica (recepção, sala de atendimento, equipe, tecnologia e ambiente), em formato retrato 4:5. Para incluir ou remover uma, duplique ou apague um bloco `<div class="hero-slide">` — bolinhas e contador se ajustam sozinhos.
- [ ] **Trocar as imagens de exemplo.** Há 27 imagens vindas do `placehold.co` (os retângulos roxos escritos "Foto Real da Clínica", "Post 1", "ANTES", "DEPOIS" etc.). Procure por `placehold.co` no `index.html` e substitua pelas fotos reais.
- [ ] **Montar o carrossel de antes e depois.** São 6 casos (Criolipólise, Hidrolipoclasia, Preenchimento facial, Peeling coreano, Harmonização do sorriso e Fotodepilação), cada um com um par de fotos. As duas fotos de cada par **precisam ter o mesmo enquadramento, distância e iluminação** — é isso que faz a comparação funcionar. Para incluir ou remover um caso, basta duplicar ou apagar um bloco `<div class="ba-slide">`: as bolinhas, o contador e as setas se ajustam sozinhos.
- [ ] **Conferir a autorização de uso de imagem** dos pacientes antes de publicar qualquer antes e depois.
- [ ] **Conferir a nota do Google.** O site afirma "4,8 / 5,0 · +120 avaliações no Google" na seção hero. Confirme no perfil real da clínica antes de publicar.
- [ ] **Conferir os depoimentos.** Os textos da seção de depoimentos são exemplos — substitua por avaliações reais.
- [ ] **Revisar o conteúdo do blog.** Os três artigos foram escritos a partir das publicações do site atual. O texto de "Bum bum na nuca" foi ampliado (o original era só um anúncio) e o de hidrolipoclasia ganhou informações complementares — vale passar pela responsável técnica antes de publicar, por serem alegações de saúde.
- [ ] **Comprimir as fotos** antes de subir (WebP ou JPG, largura máxima ~1600px). O site é leve hoje; fotos pesadas jogam essa vantagem fora.

---

## Paleta

Definida em `:root`, no topo do `styles.css`. Para mudar qualquer cor do site, altere ali — nada é escrito "na mão" nas regras.

| Variável | Cor | Onde aparece |
|---|---|---|
| `--lilac-700` | `#81638b` | faixa de tratamentos, banner de CTA, card de contato e rodapé |
| `--lilac-500` | `#b695c0` | detalhes, gradientes e traços decorativos |
| `--lilac-300` | `#dac9df` | fundo da seção de resultados e do hero |
| `--pink-300` | `#f7bfd8` | fundo do hero e manchas de luz |
| `--pink-200` | `#fbd5e5` | chips de ícone, campos e detalhes sobre fundo escuro |
| `--pink-100` | `#fdeaf2` | fundo das seções claras |
| `--cream` | `#fffbfd` | fundo geral da página |

**O roxo escuro (`--purple-900`, `--purple-800`, `--purple-700`) ficou reservado** aos botões de agendamento, aos títulos e aos links. É ele que faz o CTA saltar da tela — se for usado como fundo de seção, esse contraste se perde.

`--star` (`#bd7f15`) é usado só nas estrelinhas de avaliação.

## Tipografia

A base é **17px** (`html{font-size:106.25%}`), não os 16px padrão do navegador. Como todos os tamanhos do site são em `rem`, mudar esse único valor aumenta ou diminui o texto da página inteira de uma vez.

**O site não usa itálico em lugar nenhum** — por pedido da clínica. A regra `em{font-style:normal}` garante isso mesmo se alguém colar um `<em>` novo, e a fonte Cormorant é carregada sem o eixo itálico.

## Estrutura

```
index.html    marcação e JavaScript (dentro de <script>, no fim do arquivo)
styles.css    todo o CSS do site
README.md     este arquivo
```

Os dois arquivos precisam ficar **na mesma pasta** — o `index.html` chama o CSS por caminho
relativo (`<link rel="stylesheet" href="styles.css">`). Se separar um do outro, o site abre
sem estilo nenhum.

Recursos externos carregados via CDN (funcionam normalmente em HTTPS):

- Google Fonts — Cormorant Garamond e Poppins
- Remix Icon 3.5.0 — biblioteca de ícones
- placehold.co — apenas as imagens de exemplo, a serem substituídas

### Seções

`#hero` (carrossel de fotos da clínica) · `#sobre` · `#tratamentos` (com filtro por categoria) · `#resultados` (carrossel de antes e depois) · quiz "Descubra o seu" · `#depoimentos` · Instagram · `#blog` (artigos abrem na própria página) · `#contato` (formulário que envia para o WhatsApp) · rodapé

### Contatos configurados no site

WhatsApp: `5543991656200` — aparece no botão flutuante, no quiz e no formulário de contato.
Para trocar, procure por `wa.me/5543991656200` no arquivo.
