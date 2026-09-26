/* =========================================================================
   CLINICA PIO — script principal do site (index.html)
   Carregado no fim do <body>, por isso pode acessar o DOM direto.
   ========================================================================= */
/* Preloader: some assim que o HTML esta pronto (ou em no maximo 2,5 s), e nao
   so no evento load — que espera TODAS as imagens e, numa conexao lenta ou com
   algum recurso externo travado, deixava a tela roxa cobrindo o site e nada
   respondia ao clique. */
function pioEsconderPreloader(){
  var p = document.getElementById('preloader');
  if(p){ p.classList.add('hide'); }
}
window.addEventListener('load', function(){ setTimeout(pioEsconderPreloader, 500); });
document.addEventListener('DOMContentLoaded', function(){ setTimeout(pioEsconderPreloader, 900); });
setTimeout(pioEsconderPreloader, 2500);

var navbar = document.getElementById('navbar');
window.addEventListener('scroll', function(){
  if(window.scrollY > 40){ navbar.classList.add('scrolled'); } else { navbar.classList.remove('scrolled'); }
  var btt = document.getElementById('backToTop');
  if(window.scrollY > 600){ btt.classList.add('show'); } else { btt.classList.remove('show'); }
});

var burger = document.getElementById('burger');
var navLinks = document.getElementById('navLinks');
burger.addEventListener('click', function(){ navLinks.classList.toggle('open'); });
document.querySelectorAll('.nav-links a').forEach(function(a){
  a.addEventListener('click', function(){ navLinks.classList.remove('open'); });
});

document.getElementById('backToTop').addEventListener('click', function(){
  window.scrollTo({top:0, behavior:'smooth'});
});


/* =========================================================================
   CAMPANHAS OFICIAIS DA CLINICA (pecas de imagem)
   Tudo que e promocional e sensivel a data fica AQUI, num lugar so.
   - laser.destaque : peca principal do Laser CO2 (card grande)
   - laser.pecas    : demais regioes (carrossel). "regiao" casa com o
                      data-regiao do card de preco, de onde vem o link do
                      WhatsApp — a mensagem mora num lugar so.
   - laser.tabela   : imagem-resumo com todos os valores (abre ampliada)
   - facial         : ofertas de Estetica Avancada Facial (cards com preco)
   Para tirar uma campanha do ar: apague a linha dela (ou o bloco inteiro
   deixando a lista vazia). Os arquivos ficam em images/campanhas/, cada um
   com .jpg (original) + -480.webp + -LARGURA.webp.
   ATENCAO: as pecas do laser trazem impressa a data 29/09/2026 — quando a
   campanha passar, troque as imagens ou esvazie as listas.
   ========================================================================= */
var PIO_CAMPANHAS = {
  laser: {
    titulo: 'Campanhas Laser CO₂',
    texto: 'Peças oficiais da clínica com as condições de cada região. Toque em uma peça para ampliar.',
    destaque: {regiao:'rosto', nome:'Rosto todo + pálpebras + papada', selo:'Mais completo', img:'laser-co2-rosto-completo', w:900, h:1599,
      alt:'Campanha de Laser CO₂ fracionado para rosto todo, pálpebras e papada na Clínica PIO'},
    pecas: [
      {regiao:'papada',    nome:'Papada',    img:'laser-co2-papada',    w:900, h:1600, alt:'Condição especial de Laser CO₂ fracionado para papada na Clínica PIO'},
      {regiao:'palpebras', nome:'Pálpebras', img:'laser-co2-palpebras', w:900, h:1600, alt:'Tratamento com Laser CO₂ fracionado para pálpebras na Clínica PIO'},
      {regiao:'pescoco',   nome:'Pescoço',   img:'laser-co2-pescoco',   w:900, h:1600, alt:'Tratamento com Laser CO₂ fracionado para pescoço na Clínica PIO'},
      {regiao:'colo',      nome:'Colo',      img:'laser-co2-colo',      w:900, h:1600, alt:'Tratamento com Laser CO₂ fracionado para colo na Clínica PIO'},
      {regiao:'maos',      nome:'Mãos',      img:'laser-co2-maos',      w:900, h:1600, alt:'Tratamento com Laser CO₂ fracionado para mãos na Clínica PIO'},
      {regiao:'estrias',   nome:'Estrias',   img:'laser-co2-estrias',   w:738, h:1300, alt:'Laser CO₂ fracionado com PDRN para estrias na Clínica PIO'}
    ],
    tabela: {nome:'Valores e regiões', img:'laser-co2-valores-regioes', w:1080, h:1440,
      alt:'Tabela de valores do Laser CO₂ fracionado por região e promoções combinadas na Clínica PIO'}
  },
  facial: {
    titulo: 'Cuidados faciais em destaque',
    texto: 'Três protocolos de renovação da pele com valor fechado e retorno incluso.',
    pecas: [
      {nome:'Microagulhamento com PDRN + Exossomas', img:'microagulhamento-pdrn-exossomas', w:1092, h:1365,
       alt:'Microagulhamento com PDRN e exossomas na Clínica PIO, com antes e depois do rejuvenescimento facial',
       inclui:'Regeneração profunda: suaviza rugas e linhas finas, uniformiza o tom, clareia manchas e devolve firmeza e viço', condicao:'1 sessão + 1 retorno', preco:'299', centavos:'90',
       wa:'Olá! Vim pelo site e tenho interesse no Microagulhamento com PDRN + Exossomas (1 sessão + retorno, R$ 299,90). Quero agendar.'},
      {nome:'Peeling de Cristal', img:'peeling-cristal', w:1092, h:1440,
       alt:'Peeling de cristal na Clínica PIO, com antes e depois do tratamento',
       inclui:'Clareia manchas, suaviza linhas finas e devolve luminosidade', condicao:'1 sessão + retorno', preco:'299', centavos:'90',
       wa:'Olá! Vim pelo site e tenho interesse no Peeling de Cristal (1 sessão + retorno, R$ 299,90). Quero agendar.'},
      {nome:'Limpeza de Pele + Peeling', img:'limpeza-pele-peeling', w:1092, h:1440,
       alt:'Limpeza de pele com peeling na Clínica PIO',
       inclui:'Limpeza profunda com retorno de peeling químico de clareamento e renovação', condicao:'Combo com retorno', preco:'199', centavos:'90',
       wa:'Olá! Vim pelo site e tenho interesse na Limpeza de Pele + Peeling (retorno com peeling químico, R$ 199,90). Quero agendar.'}
    ]
  },
  corporal: {
    titulo: 'Protocolo corporal em destaque',
    texto: 'O pacote fechado que combina tecnologia e terapia manual, sessão a sessão.',
    pecas: [
      {nome:'Corpo Leve e Definido', img:'protocolo-corporal-tecnologias', w:1092, h:1456,
       alt:'Campanha do tratamento corporal completo da Clínica PIO, com drenagem, hidrolipoclasia, Heccus, modelagem e maleta quântica',
       inclui:'Drenagem, hidrolipoclasia com Heccus, modelagem corporal e maleta quântica em sessões estruturadas', condicao:'12 sessões no total', preco:'690', centavos:'00',
       wa:'Olá! Vim pelo site e tenho interesse no Tratamento Completo Corpo Leve e Definido (12 sessões: drenagem, hidrolipoclasia com Heccus, modelagem corporal e maleta quântica, R$ 690,00). Quero agendar minha avaliação.'}
    ]
  }
};

(function(){
  var PASTA = 'images/campanhas/';
  var NUMERO = '5543991656200';
  var grupos = {};   /* nome do grupo -> lista de pecas, para o lightbox navegar */

  function escapar(t){ return String(t).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;'); }

  /* <picture> com WebP em dois tamanhos e o JPG original como reserva.
     width/height fixos evitam o pulo de layout enquanto a imagem carrega. */
  function picture(p, sizes){
    var b = PASTA + p.img;
    return '<picture><source type="image/webp" srcset="' + b + '-480.webp 480w, ' + b + '-' + p.w + '.webp ' + p.w + 'w" sizes="' + sizes + '">' +
      '<img src="' + b + '.jpg" width="' + p.w + '" height="' + p.h + '" alt="' + escapar(p.alt) + '" loading="lazy" decoding="async"></picture>';
  }
  function botaoImg(p, grupo, i, sizes){
    return '<button type="button" class="camp-img" data-lb-grupo="' + grupo + '" data-lb-indice="' + i + '" aria-label="Ampliar: ' + escapar(p.nome) + '">' +
      picture(p, sizes) + '<span class="camp-zoom" aria-hidden="true"><i class="ri-zoom-in-line"></i></span></button>';
  }
  /* link do WhatsApp do card de preco da mesma regiao (mensagem mora la) */
  function waDaRegiao(regiao){
    var card = document.querySelector('.laser-card[data-regiao="' + regiao + '"] .btn-wa');
    return card ? card.getAttribute('href') : null;
  }
  function btnWa(href, rotulo){
    if(!href) return '';
    return '<a class="btn-wa" href="' + href + '" target="_blank" rel="noopener"><i class="ri-whatsapp-line"></i> ' + (rotulo || 'Agendar no WhatsApp') + '</a>';
  }

  function montarLaser(){
    var alvo = document.getElementById('laserCampanhas');
    var c = PIO_CAMPANHAS.laser;
    if(!alvo || !c || !c.destaque) return;
    var lista = [c.destaque].concat(c.pecas || []);
    if(c.tabela) lista.push(c.tabela);
    grupos.laser = lista;

    var d = c.destaque;
    var html = '<h4>' + c.titulo + '</h4><p>' + c.texto + '</p>' +
      '<div class="camp-grid">' +
        '<figure class="camp-destaque">' + botaoImg(d, 'laser', 0, '(max-width: 768px) 92vw, 300px') +
          '<figcaption>' + (d.selo ? '<span class="laser-badge top">' + d.selo + '</span>' : '') + '<strong>' + d.nome + '</strong>' + btnWa(waDaRegiao(d.regiao)) + '</figcaption>' +
        '</figure>';
    if(c.pecas && c.pecas.length){
      html += '<div class="camp-carrossel" aria-roledescription="carrossel" aria-label="Campanhas por região">' +
        '<div class="camp-viewport"><ul class="camp-track">';
      c.pecas.forEach(function(p, i){
        html += '<li class="camp-slide"><figure>' + botaoImg(p, 'laser', i + 1, '(max-width: 768px) 78vw, 280px') +
          '<figcaption><strong>' + p.nome + '</strong>' + btnWa(waDaRegiao(p.regiao), 'Agendar') + '</figcaption></figure></li>';
      });
      html += '</ul></div>' +
        '<button type="button" class="camp-nav camp-prev" aria-label="Anterior"><i class="ri-arrow-left-s-line"></i></button>' +
        '<button type="button" class="camp-nav camp-next" aria-label="Próxima"><i class="ri-arrow-right-s-line"></i></button>' +
        '<div class="camp-dots" role="tablist" aria-label="Posição do carrossel"></div></div>';
    }
    html += '</div>';
    if(c.tabela){
      var t = c.tabela;
      html += '<button type="button" class="camp-tabela" data-lb-grupo="laser" data-lb-indice="' + (lista.length - 1) + '">' +
        picture(t, '120px') +
        '<span class="camp-tabela-txt"><strong>Confira todas as condições</strong><span>Valores por região e promoções combinadas em uma única tabela.</span></span>' +
        '<span class="camp-tabela-ic" aria-hidden="true"><i class="ri-zoom-in-line"></i></span></button>';
    }
    alvo.innerHTML = html;
  }

  /* Blocos de oferta com preco (facial e corporal). E a mesma peca visual nos
     dois: muda so a chave dentro de PIO_CAMPANHAS e o <div> de destino no
     index.html. Para criar um bloco novo em outro card de tratamento, basta
     acrescentar a chave em PIO_CAMPANHAS, por um <div class="camp-bloco">
     com id proprio no post-content do card e chamar montarDestaques aqui. */
  function montarDestaques(chave, idAlvo){
    var alvo = document.getElementById(idAlvo);
    var c = PIO_CAMPANHAS[chave];
    if(!alvo || !c || !c.pecas || !c.pecas.length) return;
    grupos[chave] = c.pecas;
    /* com uma peca so a grade de 2 colunas deixaria um buraco do lado */
    var html = '<h4>' + c.titulo + '</h4><p>' + c.texto + '</p>' +
      '<div class="destaque-grid' + (c.pecas.length === 1 ? ' destaque-grid-uma' : '') + '">';
    c.pecas.forEach(function(p, i){
      var href = 'https://wa.me/' + NUMERO + '?text=' + encodeURIComponent(p.wa);
      html += '<article class="laser-card destaque-card">' + botaoImg(p, chave, i, '(max-width: 768px) 92vw, 340px') +
        '<h4>' + p.nome + '</h4><p class="laser-inclui"><i class="ri-check-double-line"></i> ' + p.inclui + '</p>' +
        '<div class="laser-preco"><span class="laser-parcela">' + p.condicao + '</span><strong>R$ ' + p.preco + '<small>,' + p.centavos + '</small></strong></div>' +
        btnWa(href) + '</article>';
    });
    alvo.innerHTML = html + '</div>';
  }

  /* ---- carrossel: rolagem nativa com snap (swipe no celular) + setas e pontos ---- */
  function iniciarCarrossel(raiz){
    var viewport = raiz.querySelector('.camp-viewport');
    var slides = [].slice.call(raiz.querySelectorAll('.camp-slide'));
    var dots = raiz.querySelector('.camp-dots');
    if(!viewport || !slides.length) return;
    var suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    dots.innerHTML = slides.map(function(_, i){
      return '<button type="button" role="tab" aria-label="Ir para a peça ' + (i + 1) + '"></button>';
    }).join('');
    var botoes = [].slice.call(dots.children);
    function atual(){
      var x = viewport.scrollLeft, melhor = 0, dist = Infinity;
      slides.forEach(function(s, i){ var d = Math.abs(s.offsetLeft - x); if(d < dist){ dist = d; melhor = i; } });
      return melhor;
    }
    function irPara(i){
      i = Math.max(0, Math.min(slides.length - 1, i));
      viewport.scrollTo({left: slides[i].offsetLeft, behavior: suave ? 'smooth' : 'auto'});
    }
    function pintar(){
      var i = atual();
      botoes.forEach(function(b, j){ b.classList.toggle('ativo', j === i); b.setAttribute('aria-selected', j === i ? 'true' : 'false'); });
      slides.forEach(function(s, j){ s.classList.toggle('ativo', j === i); });
      raiz.querySelector('.camp-prev').disabled = i === 0;
      raiz.querySelector('.camp-next').disabled = viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 4;
    }
    raiz.querySelector('.camp-prev').addEventListener('click', function(){ irPara(atual() - 1); });
    raiz.querySelector('.camp-next').addEventListener('click', function(){ irPara(atual() + 1); });
    botoes.forEach(function(b, i){ b.addEventListener('click', function(){ irPara(i); }); });
    var t; viewport.addEventListener('scroll', function(){ clearTimeout(t); t = setTimeout(pintar, 80); }, {passive:true});
    window.addEventListener('resize', pintar);
    /* o painel ainda esta escondido/animando quando o conteudo e clonado:
       mede agora, no proximo frame e depois da animacao de altura */
    pintar(); requestAnimationFrame(pintar); setTimeout(pintar, 700);
  }

  /* ---- lightbox ---- */
  var lb = document.getElementById('lightbox');
  var lbPic = lb && lb.querySelector('.lb-picture');
  var lbLeg = lb && lb.querySelector('.lb-legenda');
  var lbGrupo = null, lbIndice = 0, lbOrigem = null;

  function lbMostrar(){
    var lista = grupos[lbGrupo] || [];
    var p = lista[lbIndice];
    if(!p) return;
    var b = PASTA + p.img;
    lbPic.innerHTML = '<source type="image/webp" srcset="' + b + '-' + p.w + '.webp"><img src="' + b + '.jpg" width="' + p.w + '" height="' + p.h + '" alt="' + escapar(p.alt) + '" decoding="async">';
    lbLeg.textContent = p.nome + (lista.length > 1 ? ' · ' + (lbIndice + 1) + ' de ' + lista.length : '');
    var um = lista.length < 2;
    lb.querySelector('.lb-prev').hidden = um; lb.querySelector('.lb-next').hidden = um;
  }
  function lbAbrir(grupo, indice, origem){
    if(!lb || !grupos[grupo]) return;
    lbGrupo = grupo; lbIndice = indice; lbOrigem = origem || document.activeElement;
    lbMostrar();
    lb.hidden = false;
    document.body.classList.add('lb-aberto');
    requestAnimationFrame(function(){ requestAnimationFrame(function(){ lb.classList.add('aberto'); }); });
    lb.querySelector('.lb-fechar').focus();
  }
  function lbFechar(){
    if(!lb || lb.hidden) return;
    lb.classList.remove('aberto');
    document.body.classList.remove('lb-aberto');
    setTimeout(function(){ lb.hidden = true; lbPic.innerHTML = ''; }, 260);
    if(lbOrigem && lbOrigem.focus) lbOrigem.focus();
  }
  function lbMover(dir){
    var n = (grupos[lbGrupo] || []).length;
    if(n < 2) return;
    lbIndice = (lbIndice + dir + n) % n;
    lbMostrar();
  }
  if(lb){
    lb.querySelectorAll('[data-lb-fechar]').forEach(function(el){ el.addEventListener('click', lbFechar); });
    lb.querySelectorAll('[data-lb-dir]').forEach(function(el){ el.addEventListener('click', function(){ lbMover(+el.getAttribute('data-lb-dir')); }); });
    document.addEventListener('keydown', function(e){
      if(lb.hidden) return;
      /* com o lightbox aberto, ESC fecha so ele (o painel de tratamentos tambem ouve ESC) */
      if(e.key === 'Escape'){ e.stopImmediatePropagation(); lbFechar(); }
      else if(e.key === 'ArrowRight'){ lbMover(1); }
      else if(e.key === 'ArrowLeft'){ lbMover(-1); }
      else if(e.key === 'Tab'){
        /* foco preso nos tres botoes do lightbox */
        var focaveis = [].slice.call(lb.querySelectorAll('button:not([hidden])'));
        var i = focaveis.indexOf(document.activeElement);
        if(e.shiftKey && (i <= 0)){ e.preventDefault(); focaveis[focaveis.length - 1].focus(); }
        else if(!e.shiftKey && i === focaveis.length - 1){ e.preventDefault(); focaveis[0].focus(); }
      }
    });
    /* swipe no lightbox */
    var x0 = null;
    lb.addEventListener('touchstart', function(e){ x0 = e.touches[0].clientX; }, {passive:true});
    lb.addEventListener('touchend', function(e){
      if(x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if(Math.abs(dx) > 50) lbMover(dx < 0 ? 1 : -1);
    }, {passive:true});
  }
  /* qualquer peca clicada (no painel, que e conteudo clonado) abre o lightbox */
  document.addEventListener('click', function(e){
    var b = e.target.closest('[data-lb-grupo]');
    if(!b) return;
    e.preventDefault();
    lbAbrir(b.getAttribute('data-lb-grupo'), +b.getAttribute('data-lb-indice'), b);
  });

  /* chamado pelo painel expansivel toda vez que um card abre: o conteudo e
     clonado por innerHTML, entao o carrossel precisa ser iniciado de novo */
  window.pioIniciarCampanhas = function(body){
    body.querySelectorAll('.camp-carrossel').forEach(iniciarCarrossel);
  };

  montarLaser();
  montarDestaques('facial', 'facialDestaques');
  montarDestaques('corporal', 'corporalDestaques');
})();
/* =========================================================================
   S DOS TRATAMENTOS — secao "Na pratica" (#s)
   Mesma ideia do PIO_CAMPANHAS logo acima: tudo que e conteudo promocional
   mora aqui, num lugar so, e o HTML da secao e montado a partir daqui.

   Cada item precisa de um par de arquivos na pasta s/:
     nome.mp4   — o  (vertical, 9:16, o formato nativo dos reels)
     nome.jpg   — a capa, 540x960  |  nome.webp — a mesma capa em WebP
   O campo "arq" e esse nome, sem extensao.

   Campos do item:
     cat      selo de categoria que aparece em cima do titulo
     nome     titulo do tratamento
     texto    o resumo — a legenda do Instagram enxugada
     itens    3 linhas curtas com o que esta incluso
     condicao + preco + centavos  -> card de valor
     selo     usado no lugar do valor quando a peca nao tem preco
     dur      duracao escrita (so enfeite, aparece na capa)
     insta    link do post original
     wa       mensagem que ja vai escrita no WhatsApp
     alt      descricao da capa para leitores de tela

   PARA TIRAR UM  DO AR: apague a linha dele. A secao inteira some
   sozinha se a lista ficar vazia.
   ========================================================================= */
var PIO_S = {
  itens: [
    {arq:'protocolo-corporal-completo', cat:'Corporal', nome:'Protocolo Corpo Leve e Definido',
     texto:'Nove sessões desenhadas para reduzir medidas e redesenhar o contorno do corpo. As enzimas agem sobre a gordura localizada, a lipocavitação potencializa o resultado e o Sculpe Detox fecha o protocolo com modelagem abdominal.',
     itens:['3 sessões de enzimas', '3 sessões de lipocavitação', '3 sessões de Sculpe Detox com modelagem abdominal'],
     condicao:'9 sessões no total', preco:'790', centavos:'00', dur:'0:36',
     insta:'https://www.instagram.com/reel/DaYkho-sbn6/',
     wa:'Olá! Vim pelo site e tenho interesse no Protocolo Corpo Leve e Definido (9 sessões: 3 de enzimas, 3 de lipocavitação e 3 de Sculpe Detox com modelagem abdominal, R$ 790,00). Quero agendar minha avaliação.',
     alt:'Peça da campanha do protocolo corporal completo da Clínica PIO, com as nove sessões e o valor'},

    {arq:'liberacao-miofascial', cat:'Massoterapia', nome:'Liberação Miofascial',
     texto:'A tensão muscular se instala devagar e um dia começa a limitar o movimento. A liberação miofascial desativa os pontos de tensão, devolve mobilidade e alivia dores crônicas — inclusive em casos de bruxismo, cefaleia e fascite plantar.',
     itens:['Alivia dores musculares e crônicas', 'Melhora a mobilidade no dia a dia', 'Atendimento personalizado, do começo ao fim'],
     condicao:'Sessão de 1 hora', preco:'130', centavos:'00', dur:'0:45',
     insta:'https://www.instagram.com/reel/DbOf_NGs357/',
     wa:'Olá! Vim pelo site e tenho interesse na Liberação Miofascial (sessão de 1 hora, R$ 130,00). Quero agendar.',
     alt:'Peça da Clínica PIO sobre a liberação miofascial, com os benefícios e o valor da sessão'},

    {arq:'pedras-quentes', cat:'Relaxamento', nome:'Massagem com Pedras Quentes',
     texto:'O calor do basalto sobre o corpo abre a circulação, solta a musculatura e desmancha a tensão acumulada. Uma sessão para desacelerar de verdade e cuidar do corpo e da mente ao mesmo tempo.',
     itens:['Ativa a circulação e a drenagem linfática', 'Alivia dores e tensões musculares', 'Relaxamento profundo de corpo e mente'],
     condicao:'Valor promocional', preco:'130', centavos:'00', dur:'0:41',
     insta:'https://www.instagram.com/reel/DbOXxWAMEsr/',
     wa:'Olá! Vim pelo site e tenho interesse na Massagem com Pedras Quentes (valor promocional de R$ 130,00). Quero agendar.',
     alt:'Peça da Clínica PIO sobre a massagem com pedras quentes, com os benefícios e o valor promocional'},

    {arq:'relaxar-modelagem-abdominal', cat:'Bastidores', nome:'O lugar certo para a sua massagem',
     texto:'Ambiente acolhedor, mãos experientes e um tempo reservado só para você. Quem vem relaxar na Pio ainda sai com uma modelagem abdominal de cortesia.',
     itens:['Modelagem abdominal de cortesia', 'Profissionais formadas em cada técnica', 'Sala preparada para o seu relaxamento'],
     selo:'Ganhe uma modelagem abdominal', dur:'0:17',
     insta:'https://www.instagram.com/reel/Dc8dUmRDNjg/',
     wa:'Olá! Vim pelo site, quero agendar uma massagem e vi que ganho uma modelagem abdominal de cortesia.',
     alt:'Sessão de massagem nas costas na Clínica PIO'}
  ]
};

(function(){
  var PASTA = 's/';
  var NUMERO = '5543991656200';
  var bloco = document.getElementById('sBloco');
  var itens = (typeof PIO_S !== 'undefined' && PIO_S.itens) || [];
  if(!bloco) return;
  /* sem itens a secao inteira sai do ar — nao fica um buraco no meio do site */
  if(!itens.length){
    var secao = document.getElementById('s');
    if(secao) secao.hidden = true;
    return;
  }

  function escapar(t){ return String(t).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;'); }

  /* a capa e sempre 540x960: as medidas fixas seguram o layout enquanto a
     imagem carrega, e o WebP entra na frente do JPG quando o navegador aceita */
  function capa(v){
    return '<picture><source type="image/webp" srcset="' + PASTA + v.arq + '.webp">' +
      '<img src="' + PASTA + v.arq + '.jpg" width="540" height="960" alt="' + escapar(v.alt) + '" loading="lazy" decoding="async"></picture>';
  }

  /* O palco e reescrito a cada troca de . E de proposito: assim existe
     UM unico <> na pagina de cada vez, em vez de quatro players parados
     ocupando memoria — o que pesa bastante no celular. */
  function palcoHtml(v){
    var valor = v.preco
      ? '<div class="laser-preco vid-preco"><span class="laser-parcela">' + v.condicao + '</span><strong>R$ ' + v.preco + '<small>,' + v.centavos + '</small></strong></div>'
      : '<div class="vid-selo"><i class="ri-gift-line"></i> ' + v.selo + '</div>';
    var lista = (v.itens || []).map(function(t){
      return '<li><i class="ri-check-double-line"></i>' + t + '</li>';
    }).join('');
    return '<div class="vid-quadro">' +
        '< class="vid-player" preload="none" playsinline controls poster="' + v.arq + '.jpg">' +
          '<source src="' + v.arq + '.mp4" type="/mp4">' +
          'Seu navegador não abre vídeos. <a href="' + v.insta + '" target="_blank" rel="noopener">Assista no Instagram</a>.' +
        '</>' +
        '<button type="button" class="vid-capa" aria-label="Assistir: ' + escapar(v.nome) + '">' +
          capa(v) +
          '<span class="vid-play" aria-hidden="true"><i class="ri-play-fill"></i></span>' +
          '<span class="vid-dur" aria-hidden="true"><i class="ri-time-line"></i>' + v.dur + '</span>' +
        '</button>' +
      '</div>' +
      '<div class="vid-ficha">' +
        '<span class="laser-badge">' + v.cat + '</span>' +
        '<h3>' + v.nome + '</h3>' +
        '<p>' + v.texto + '</p>' +
        '<ul class="vid-itens">' + lista + '</ul>' +
        valor +
        '<div class="vid-acoes">' +
          '<a class="btn-wa" href="https://wa.me/' + NUMERO + '?text=' + encodeURIComponent(v.wa) + '" target="_blank" rel="noopener"><i class="ri-whatsapp-line"></i> Agendar no WhatsApp</a>' +
          '<a class="vid-insta" href="' + v.insta + '" target="_blank" rel="noopener"><i class="ri-instagram-line"></i> Ver o post original</a>' +
        '</div>' +
      '</div>';
  }

  var fila = itens.map(function(v, i){
    return '<button type="button" class="vid-thumb" role="tab" aria-selected="' + (i === 0 ? 'true' : 'false') + '" data-i="' + i + '">' +
      '<span class="vid-thumb-capa">' + capa(v) + '<span class="vid-thumb-play" aria-hidden="true"><i class="ri-play-fill"></i></span></span>' +
      '<span class="vid-thumb-txt"><strong>' + v.nome + '</strong><span>' + v.cat + ' · ' + v.dur + '</span></span>' +
      '</button>';
  }).join('');

  bloco.innerHTML = '<div class="vid-palco"></div>' +
    '<div class="vid-fila" role="tablist" aria-label="Escolher vídeo">' + fila + '</div>';

  var palco = bloco.querySelector('.vid-palco');
  var thumbs = [].slice.call(bloco.querySelectorAll('.vid-thumb'));
  var atual = -1;

  function trocar(i, focar){
    if(i === atual) return;
    atual = i;
    palco.innerHTML = palcoHtml(itens[i]);
    thumbs.forEach(function(b, j){
      b.classList.toggle('ativo', j === i);
      b.setAttribute('aria-selected', j === i ? 'true' : 'false');
    });
    /* quando o  acaba a capa volta, e o bloco fica arrumado de novo */
    var player = palco.querySelector('.vid-player');
    var quadro = palco.querySelector('.vid-quadro');
    player.addEventListener('ended', function(){ quadro.classList.remove('tocando'); });
    if(focar){ palco.querySelector('.vid-capa').focus(); }
  }

  /* o play so acontece no clique: o <> nasce com preload="none", entao
     nada e baixado enquanto a pessoa nao pedir */
  palco.addEventListener('click', function(e){
    var b = e.target.closest('.vid-capa');
    if(!b) return;
    var quadro = b.parentNode;
    var player = quadro.querySelector('.vid-player');
    quadro.classList.add('tocando');
    var p = player.play();
    if(p && p['catch']) p['catch'](function(){ quadro.classList.remove('tocando'); });
  });

  bloco.addEventListener('click', function(e){
    var b = e.target.closest('.vid-thumb');
    if(!b) return;
    trocar(+b.getAttribute('data-i'), true);
  });

  /* setas do teclado andam pela fila, como manda o padrao de abas */
  bloco.addEventListener('keydown', function(e){
    if(!e.target.closest('.vid-thumb')) return;
    var passo = e.key === 'ArrowRight' ? 1 : (e.key === 'ArrowLeft' ? -1 : 0);
    if(!passo) return;
    e.preventDefault();
    var i = (atual + passo + itens.length) % itens.length;
    thumbs[i].focus();
    trocar(i);
  });

  trocar(0);
})();


/* Painel expansivel, usado pelo blog e pelos tratamentos: o conteudo abre
   na propria pagina, logo abaixo da linha do card clicado */
function initExpandingGrid(cfg){
  var grid = document.getElementById(cfg.grid);
  if(!grid) return null;
  var panel = document.getElementById(cfg.panel);
  var body = panel.querySelector('.exp-panel-body');
  var openCard = null;
  var finishTimer = null;

  function markCard(card, aberto){
    card.classList.toggle('active', aberto);
    var btn = card.querySelector('.card-more');
    btn.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    btn.querySelector('span').textContent = aberto ? 'Fechar' : (btn.getAttribute('data-label') || cfg.label);
  }

  function finishTransition(){
    clearTimeout(finishTimer);
    if(openCard){
      panel.style.height = 'auto';
      panel.style.overflow = 'visible';
    } else {
      panel.hidden = true;
    }
  }

  function animateTo(target){
    clearTimeout(finishTimer);
    panel.style.height = target + 'px';
    finishTimer = setTimeout(finishTransition, 650);
  }

  /* posiciona o painel no fim da linha do card clicado: no desktop abre embaixo
     da linha inteira, no celular embaixo do proprio card. So conta os cards
     visiveis, porque na grade de tratamentos o filtro esconde varios deles */
  function placePanel(card){
    panel.hidden = true;
    var cards = grid.querySelectorAll(cfg.card);
    var last = card;
    for(var i=0; i<cards.length; i++){
      if(cards[i].offsetParent === null) continue;
      if(Math.abs(cards[i].offsetTop - card.offsetTop) < 2){ last = cards[i]; }
    }
    grid.insertBefore(panel, last.nextSibling);
    panel.hidden = false;
  }

  function abrir(card){
    var from = openCard ? panel.getBoundingClientRect().height : 0;
    if(openCard){ markCard(openCard, false); }
    body.innerHTML = card.querySelector('.post-content').innerHTML;
    if(cfg.aoAbrir){ cfg.aoAbrir(body, card); }
    panel.style.overflow = 'hidden';
    panel.style.height = from + 'px';
    placePanel(card);
    void panel.offsetHeight;
    openCard = card;
    markCard(card, true);
    animateTo(panel.scrollHeight);
    setTimeout(function(){
      var box = panel.getBoundingClientRect();
      if(box.top < 90 || box.top > window.innerHeight - 140){
        window.scrollTo({top: box.top + window.pageYOffset - 120, behavior:'smooth'});
      }
    }, 140);
  }

  function fechar(){
    if(!openCard) return;
    markCard(openCard, false);
    openCard = null;
    panel.style.overflow = 'hidden';
    panel.style.height = panel.getBoundingClientRect().height + 'px';
    void panel.offsetHeight;
    animateTo(0);
  }

  panel.addEventListener('transitionend', function(e){
    if(e.propertyName === 'height'){ finishTransition(); }
  });

  grid.addEventListener('click', function(e){
    if(e.target.closest('.exp-panel')) return;
    var card = e.target.closest(cfg.card);
    if(!card) return;
    if(card === openCard){ fechar(); } else { abrir(card); }
  });

  panel.querySelector('.exp-panel-close').addEventListener('click', fechar);
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && !document.body.classList.contains('lb-aberto')){ fechar(); } });
  window.addEventListener('resize', function(){ if(openCard){ placePanel(openCard); } });

  return { fechar: fechar };
}

var blogExp = initExpandingGrid({grid:'blogGrid', panel:'blogPanel', card:'.blog-card', label:'Leia mais'});
var treatExp = initExpandingGrid({grid:'treatGrid', panel:'treatPanel', card:'.treat-card', label:'Saiba mais', aoAbrir:pioIniciarCampanhas});

/* Scroll reveal */
var revealEls = document.querySelectorAll('.reveal');
var io = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if(entry.isIntersecting){ entry.target.classList.add('in-view'); io.unobserve(entry.target); }
  });
}, {threshold:.15});
revealEls.forEach(function(el){ io.observe(el); });

/* Botoes de agendamento: a rolagem tem que parar no formulario, nao no card
   de endereco/telefone (no celular a grade empilha o card antes do form).
   Dois detalhes que quebram a conta ingenua:
   - o #contactForm carrega .reveal, que o desloca 36px por transform durante
     0,9s. getBoundingClientRect devolve a posicao COM o transform, ou seja, a
     posicao velha. Por isso somamos offsetTop, que ignora transform.
   - a folga sai do scroll-padding-top do proprio CSS, que ja acompanha os
     breakpoints do cabecalho — evita ter a mesma medida em dois lugares. */
function pioTopoReal(el){
  var y = 0;
  while(el){ y += el.offsetTop; el = el.offsetParent; }
  return y;
}
document.querySelectorAll('a[href="#contactForm"]').forEach(function(link){
  link.addEventListener('click', function(e){
    var form = document.getElementById('contactForm');
    if(!form) return;
    e.preventDefault();
    form.classList.add('in-view');
    var folga = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 90;
    window.scrollTo({top: Math.max(0, pioTopoReal(form) - folga), behavior:'smooth'});
    history.replaceState(null, '', '#contactForm');
  });
});

/* -------------------------------------------------------------------------
   PAINEL DE ASSUNTO DO WHATSAPP
   Um toque no botao verde escolhe o assunto; o texto vai montado com o
   assunto E a origem ("Vim pelo site"), que e como a clinica separa quem
   veio daqui de quem veio do Instagram. O href do <a> continua valendo como
   fallback: se este script nao rodar, o clique abre o WhatsApp como antes.
   ------------------------------------------------------------------------- */
(function(){
  var flut = document.getElementById('waFloat');
  var painel = document.getElementById('waPainel');
  var fundo = document.getElementById('waFundo');
  if(!flut || !painel || !fundo) return;

  var NUMERO = '5543991656200';
  var ultimoFoco = null;

  function abrir(e){
    e.preventDefault();
    ultimoFoco = document.activeElement;
    fundo.hidden = false; painel.hidden = false;
    document.body.classList.add('wa-aberto');
    /* dois frames: o navegador precisa pintar o estado inicial antes da
       transicao, senao o painel aparece pronto e a animacao nao acontece */
    requestAnimationFrame(function(){ requestAnimationFrame(function(){
      fundo.classList.add('aberto'); painel.classList.add('aberto');
    }); });
    var primeiro = painel.querySelector('.wa-opcoes button');
    if(primeiro) primeiro.focus();
  }

  function fechar(){
    fundo.classList.remove('aberto'); painel.classList.remove('aberto');
    document.body.classList.remove('wa-aberto');
    setTimeout(function(){ fundo.hidden = true; painel.hidden = true; }, 280);
    if(ultimoFoco) ultimoFoco.focus();
  }

  function mensagem(assunto){
    if(!assunto) return 'Olá! Vim pelo site e gostaria de falar com a equipe.';
    return 'Olá! Vim pelo site e quero saber sobre ' + assunto + '.';
  }

  flut.addEventListener('click', abrir);
  document.getElementById('waFechar').addEventListener('click', fechar);
  fundo.addEventListener('click', fechar);
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !painel.hidden) fechar();
  });

  painel.querySelectorAll('.wa-opcoes button').forEach(function(b){
    b.addEventListener('click', function(){
      var texto = mensagem(b.getAttribute('data-wa'));
      window.open('https://wa.me/' + NUMERO + '?text=' + encodeURIComponent(texto), '_blank');
      fechar();
    });
  });

  document.getElementById('waPreferoForm').addEventListener('click', function(){
    fechar();
    var form = document.getElementById('contactForm');
    if(!form) return;
    form.classList.add('in-view');
    var folga = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 90;
    window.scrollTo({top: Math.max(0, pioTopoReal(form) - folga), behavior:'smooth'});
  });
})();

/* Contadores animados */
var counters = document.querySelectorAll('[data-count]');
var counted = new WeakMap();
var io2 = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if(entry.isIntersecting && !counted.get(entry.target)){
      counted.set(entry.target, true);
      var el = entry.target;
      var target = parseFloat(el.getAttribute('data-count'));
      var decimal = el.getAttribute('data-decimal');
      var start = 0;
      var duration = 1600;
      var startTime = null;
      function step(ts){
        if(!startTime) startTime = ts;
        var progress = Math.min((ts - startTime) / duration, 1);
        var value = progress * target;
        if(decimal){ el.textContent = (value/10).toFixed(1); }
        else { el.textContent = Math.floor(value); }
        if(progress < 1){ requestAnimationFrame(step); }
        else { el.textContent = decimal ? (target/10).toFixed(1) : target; }
      }
      requestAnimationFrame(step);
      io2.unobserve(el);
    }
  });
}, {threshold:.4});
counters.forEach(function(el){ io2.observe(el); });

/* Filtro de tratamentos */
var filterButtons = document.querySelectorAll('#filterTabs button');
var treatCards = document.querySelectorAll('#treatGrid [data-cat]');
filterButtons.forEach(function(btn){
  btn.addEventListener('click', function(){
    /* fecha o painel antes de trocar o filtro, senao ele fica orfao no meio da grade */
    if(treatExp){ treatExp.fechar(); }
    filterButtons.forEach(function(b){ b.classList.remove('active'); });
    btn.classList.add('active');
    var filter = btn.getAttribute('data-filter');
    treatCards.forEach(function(card){
      var cats = card.getAttribute('data-cat');
      if(filter === 'all' || cats.indexOf(filter) !== -1){ card.classList.add('show'); }
      else { card.classList.remove('show'); }
    });
  });
});

/* Links que ja abrem a aba do Laser CO2 (rodape) e o hash #laser-co2 */
function abrirAbaLaser(){
  var alvo = document.querySelector('#filterTabs button[data-filter="laser"]');
  if(alvo && !alvo.classList.contains('active')){ alvo.click(); }
}
document.querySelectorAll('[data-filtro="laser"]').forEach(function(a){
  a.addEventListener('click', abrirAbaLaser);
});
/* link direto (ex.: bio do Instagram) — abre a aba e rola ate a secao depois
   que a pagina termina de montar, senao o pulo nativo do navegador se perde */
if(location.hash === '#laser-co2'){
  abrirAbaLaser();
  window.addEventListener('load', function(){
    setTimeout(function(){
      var sec = document.getElementById('tratamentos');
      var folga = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 90;
      window.scrollTo({top: Math.max(0, pioTopoReal(sec) - folga), behavior:'smooth'});
      /* e ja abre o painel do laser: quem chega pelo link quer ver as condicoes */
      var abrir = document.querySelector('#laser-co2 .card-more');
      if(abrir && abrir.getAttribute('aria-expanded') !== 'true'){ abrir.click(); }
    }, 600);
  });
}

/* Carrossel de fotos (hero e sobre) — mesma mecanica nos dois,
   muda apenas o prefixo das classes de cada secao */
function montarCarrosselFotos(rootId, prefixo){
  var raiz = document.getElementById(rootId);
  if(!raiz) return;
  var hViewport = raiz.querySelector('.' + prefixo + '-viewport');
  var hTrack = raiz.querySelector('.' + prefixo + '-track');
  var hSlides = [].slice.call(raiz.querySelectorAll('.' + prefixo + '-slide'));
  var hDots = raiz.querySelector('.' + prefixo + '-dots');
  var hCounter = raiz.querySelector('.' + prefixo + '-counter');
  var hPrev = raiz.querySelector('.' + prefixo + '-nav.prev');
  var hNext = raiz.querySelector('.' + prefixo + '-nav.next');
  var hIndex = 0, hTimer = null, hStartX = 0, hStartY = 0, hMode = null, hWidth = 0;
  var hReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  hSlides.forEach(function(s, i){
    var dot = document.createElement('button');
    dot.type = 'button';
    dot.className = prefixo + '-dot';
    dot.setAttribute('aria-label', 'Foto ' + (i + 1) + ' de ' + hSlides.length);
    dot.addEventListener('click', function(){ hGoTo(i); hReiniciar(); });
    hDots.appendChild(dot);
  });

  /* wrap=true da a volta (setas e passagem automatica);
     no arraste ele para nas pontas, senao a resistencia do dedo mentiria */
  function hGoTo(i, wrap){
    hIndex = wrap ? (i + hSlides.length) % hSlides.length
                  : Math.max(0, Math.min(hSlides.length - 1, i));
    hTrack.classList.remove('no-anim');
    hTrack.style.transform = 'translateX(' + (-hIndex * 100) + '%)';
    hDots.querySelectorAll('.' + prefixo + '-dot').forEach(function(d, n){ d.classList.toggle('active', n === hIndex); });
    hCounter.textContent = (hIndex + 1) + '/' + hSlides.length;
  }

  /* gira sozinho de 5 em 5 segundos, sem parar nunca — inclusive dando a
     volta no fim (hGoTo com wrap=true). Qualquer interacao do visitante
     (seta, bolinha, arraste ou teclado) apenas REINICIA a contagem, para a
     foto nao trocar no susto logo depois do toque. O unico caso em que o
     giro nao comeca e quando o sistema pede menos animacao (hReduced) */
  function hStart(){ if(!hReduced && !hTimer){ hTimer = setInterval(function(){ hGoTo(hIndex + 1, true); }, 5000); } }
  function hStop(){ clearInterval(hTimer); hTimer = null; }
  function hReiniciar(){ hStop(); hStart(); }

  hPrev.addEventListener('click', function(){ hGoTo(hIndex - 1, true); hReiniciar(); });
  hNext.addEventListener('click', function(){ hGoTo(hIndex + 1, true); hReiniciar(); });

  hViewport.addEventListener('pointerdown', function(e){
    if(e.target.closest('.' + prefixo + '-nav') || e.target.closest('.' + prefixo + '-dot')) return;
    hStop();
    hStartX = e.clientX; hStartY = e.clientY; hMode = null;
    hWidth = hViewport.getBoundingClientRect().width;
    hViewport.setPointerCapture(e.pointerId);
  });

  hViewport.addEventListener('pointermove', function(e){
    if(!hViewport.hasPointerCapture(e.pointerId)) return;
    var dx = e.clientX - hStartX, dy = e.clientY - hStartY;
    if(hMode === null){
      if(Math.abs(dy) > 10 && Math.abs(dy) > Math.abs(dx)){ hMode = 'scroll'; return; }
      if(Math.abs(dx) > 8){ hMode = 'swipe'; hTrack.classList.add('no-anim'); }
      else return;
    }
    if(hMode === 'swipe'){
      var limit = (hIndex === 0 && dx > 0) || (hIndex === hSlides.length - 1 && dx < 0);
      hTrack.style.transform = 'translateX(' + (-hIndex * hWidth + (limit ? dx * 0.3 : dx)) + 'px)';
      e.preventDefault();
    }
  });

  function hEnd(e){
    if(!hViewport.hasPointerCapture(e.pointerId)) return;
    hViewport.releasePointerCapture(e.pointerId);
    if(hMode === 'swipe'){
      var dx = e.clientX - hStartX;
      hGoTo(Math.abs(dx) > hWidth * 0.16 ? hIndex + (dx < 0 ? 1 : -1) : hIndex);
    }
    hMode = null;
    hReiniciar();
  }
  hViewport.addEventListener('pointerup', hEnd);
  hViewport.addEventListener('pointercancel', hEnd);

  raiz.addEventListener('keydown', function(e){
    if(e.key === 'ArrowLeft'){ hGoTo(hIndex - 1, true); hReiniciar(); }
    if(e.key === 'ArrowRight'){ hGoTo(hIndex + 1, true); hReiniciar(); }
  });

  hGoTo(0);
  hStart();
}
montarCarrosselFotos('destaqueCarousel', 'destaque');
montarCarrosselFotos('aboutCarousel', 'about');

/* Antes e depois — carrossel com um comparador em cada slide */
var baCarousel = document.getElementById('baCarousel');
if(baCarousel){
  var baViewport = baCarousel.querySelector('.ba-viewport');
  var baTrack = baCarousel.querySelector('.ba-track');
  var baSlides = [].slice.call(baCarousel.querySelectorAll('.ba-slide'));
  var baDots = baCarousel.querySelector('.ba-dots');
  var baCounter = baCarousel.querySelector('.ba-counter');
  var baPrev = baCarousel.querySelector('.ba-nav.prev');
  var baNext = baCarousel.querySelector('.ba-nav.next');
  var baIndex = 0;

  /* cada slide controla o proprio antes/depois */
  baSlides.forEach(function(slide){
    var sl = slide.querySelector('.ba-slider');
    var after = sl.querySelector('.ba-after');
    var handle = sl.querySelector('.ba-handle');
    var range = sl.querySelector('.ba-range');
    sl.baPos = 50;
    sl.setBA = function(v){
      v = Math.max(0, Math.min(100, v));
      sl.baPos = v;
      after.style.clipPath = 'inset(0 ' + (100 - v) + '% 0 0)';
      handle.style.left = v + '%';
      range.value = v;
    };
    sl.setBA(50);
    range.addEventListener('input', function(){ sl.setBA(parseFloat(range.value)); });
  });

  /* navegacao */
  baSlides.forEach(function(slide, i){
    var dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'ba-dot';
    dot.setAttribute('aria-label', 'Resultado ' + (i + 1) + ' de ' + baSlides.length);
    dot.addEventListener('click', function(){ baGoTo(i); });
    baDots.appendChild(dot);
  });

  /* cada slide tem a sua propria proporcao (data-ratio): o quadro muda de
     formato ao trocar de resultado. A altura vai em px porque e assim que a
     transicao do CSS consegue animar — de aspect-ratio para aspect-ratio o
     navegador so daria o salto. */
  function baProporcao(i){
    var r = (baSlides[i].getAttribute('data-ratio') || '4/3').split('/');
    var v = r.length === 2 ? parseFloat(r[0]) / parseFloat(r[1]) : parseFloat(r[0]);
    return v > 0 ? v : 4/3;
  }
  function baAltura(){
    var largura = baViewport.getBoundingClientRect().width;
    if(!largura) return;
    /* a classe desliga o aspect-ratio de reserva do CSS: com ele ligado e a
       altura em px, o navegador passa a deduzir a largura do quadro pela
       proporcao e a coluna encolhe a cada troca de slide */
    baViewport.classList.add('altura-js');
    baViewport.style.height = (largura / baProporcao(baIndex)) + 'px';
  }

  function baGoTo(i){
    baIndex = Math.max(0, Math.min(baSlides.length - 1, i));
    baTrack.classList.remove('no-anim');
    baTrack.style.transform = 'translateX(' + (-baIndex * 100) + '%)';
    baAltura();
    baDots.querySelectorAll('.ba-dot').forEach(function(d, n){ d.classList.toggle('active', n === baIndex); });
    baCounter.textContent = (baIndex + 1) + '/' + baSlides.length;
    baPrev.disabled = baIndex === 0;
    baNext.disabled = baIndex === baSlides.length - 1;
  }

  baPrev.addEventListener('click', function(){ baGoTo(baIndex - 1); });
  baNext.addEventListener('click', function(){ baGoTo(baIndex + 1); });

  baAltura();
  var baResizeT;
  window.addEventListener('resize', function(){
    baViewport.classList.add('sem-anim');
    baAltura();
    clearTimeout(baResizeT);
    baResizeT = setTimeout(function(){ baViewport.classList.remove('sem-anim'); }, 150);
  });

  /* um gesto so: perto do controle branco compara, no resto do foto navega */
  var baStartX = 0, baStartY = 0, baMode = null, baDragSlider = null, baWidth = 0;

  /* a geometria vem sempre do viewport (que nao se move) e do slide atual —
     ler o rect do slide daria valores errados no meio da transicao */
  function baCurrent(){ return baSlides[baIndex].querySelector('.ba-slider'); }
  function baPercentAt(clientX){
    var r = baViewport.getBoundingClientRect();
    return (clientX - r.left) / r.width * 100;
  }

  baCarousel.addEventListener('pointerdown', function(e){
    if(e.target.closest('.ba-nav') || e.target.closest('.ba-dot')) return;
    if(!e.target.closest('.ba-viewport')) return;
    var r = baViewport.getBoundingClientRect();
    baStartX = e.clientX; baStartY = e.clientY; baMode = null; baDragSlider = null;
    baWidth = r.width;
    var sl = baCurrent();
    if(Math.abs(e.clientX - (r.left + (sl.baPos / 100) * r.width)) <= 44){
      baMode = 'compare';
      baDragSlider = sl;
      sl.classList.add('comparing');
    }
    baCarousel.setPointerCapture(e.pointerId);
  });

  baCarousel.addEventListener('pointermove', function(e){
    if(!baCarousel.hasPointerCapture(e.pointerId)) return;
    var dx = e.clientX - baStartX, dy = e.clientY - baStartY;
    if(baMode === 'compare'){
      baDragSlider.setBA(baPercentAt(e.clientX));
      e.preventDefault();
      return;
    }
    if(baMode === null){
      if(Math.abs(dy) > 10 && Math.abs(dy) > Math.abs(dx)){ baMode = 'scroll'; return; }
      if(Math.abs(dx) > 8){ baMode = 'swipe'; baTrack.classList.add('no-anim'); }
      else return;
    }
    if(baMode === 'swipe'){
      var limit = (baIndex === 0 && dx > 0) || (baIndex === baSlides.length - 1 && dx < 0);
      baTrack.style.transform = 'translateX(' + (-baIndex * baWidth + (limit ? dx * 0.3 : dx)) + 'px)';
      e.preventDefault();
    }
  });

  function baEndDrag(e){
    if(!baCarousel.hasPointerCapture(e.pointerId)) return;
    baCarousel.releasePointerCapture(e.pointerId);
    if(baDragSlider){ baDragSlider.classList.remove('comparing'); }
    if(baMode === 'swipe'){
      var dx = e.clientX - baStartX;
      baGoTo(Math.abs(dx) > baWidth * 0.16 ? baIndex + (dx < 0 ? 1 : -1) : baIndex);
    } else if(baMode === null && e.pointerType === 'mouse' && e.target.closest('.ba-viewport')){
      /* clique simples no desktop leva o comparador ate o ponto clicado */
      baCurrent().setBA(baPercentAt(e.clientX));
    }
    baMode = null; baDragSlider = null;
  }

  baCarousel.addEventListener('pointerup', baEndDrag);
  baCarousel.addEventListener('pointercancel', baEndDrag);

  baCarousel.addEventListener('keydown', function(e){
    if(e.target.classList.contains('ba-range')) return;
    if(e.key === 'ArrowLeft'){ baGoTo(baIndex - 1); }
    if(e.key === 'ArrowRight'){ baGoTo(baIndex + 1); }
  });

  baGoTo(0);
}

/* Quiz interativo */
var quizAnswers = { area: null, urgencia: null };
var treatmentMap = {
  corpo: 'Estética Avançada Corporal — Criolipólise + Enzimas + Hidrolipoclasia para reduzir medidas e modelar o corpo.',
  rosto: 'Estética Avançada Facial — Peeling Coreano + Preenchimento para rejuvenescer com resultado natural.',
  saude: 'Medicina Funcional Integrativa — avaliação completa para equilibrar sua saúde e bem-estar.',
  sorriso: 'Odontologia Estética — harmonização do sorriso com técnicas modernas e naturais.'
};
var qp1 = document.getElementById('qp1');
var qp2 = document.getElementById('qp2');
document.querySelectorAll('#step1 button').forEach(function(btn){
  btn.addEventListener('click', function(){
    quizAnswers.area = btn.getAttribute('data-area');
    qp1.style.width = '100%';
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
  });
});
document.querySelectorAll('#step2 button').forEach(function(btn){
  btn.addEventListener('click', function(){
    quizAnswers.urgencia = btn.getAttribute('data-urg');
    qp2.style.width = '100%';
    document.getElementById('step2').classList.remove('active');
    document.getElementById('stepResult').classList.add('active');
    var rec = treatmentMap[quizAnswers.area] || 'Uma avaliação personalizada com nossa equipe.';
    document.getElementById('resultText').textContent = rec;
    var msg = 'Olá! Fiz o quiz no site da Clínica PIO. Meu interesse é: ' + rec + ' Urgência: ' + quizAnswers.urgencia + '. Gostaria de agendar minha avaliação gratuita!';
    document.getElementById('resultWhats').href = 'https://wa.me/5543991656200?text=' + encodeURIComponent(msg);
  });
});
document.getElementById('quizRestart').addEventListener('click', function(){
  quizAnswers = { area: null, urgencia: null };
  qp1.style.width = '0%'; qp2.style.width = '0%';
  document.getElementById('stepResult').classList.remove('active');
  document.getElementById('step1').classList.add('active');
});

/* Carrossel de depoimentos */
var slides = document.querySelectorAll('.test-slide');
var dotsWrap = document.getElementById('testDots');
var current = 0;
slides.forEach(function(_, i){
  var dot = document.createElement('button');
  if(i === 0) dot.classList.add('active');
  dot.addEventListener('click', function(){ goToSlide(i); });
  dotsWrap.appendChild(dot);
});
function goToSlide(i){
  slides[current].classList.remove('active');
  dotsWrap.children[current].classList.remove('active');
  current = i;
  slides[current].classList.add('active');
  dotsWrap.children[current].classList.add('active');
}
setInterval(function(){ goToSlide((current + 1) % slides.length); }, 4000);

/* Formulário (front-end apenas) */
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  var nome = document.getElementById('pioNome').value.trim();
  var telefone = document.getElementById('pioTelefone').value.trim();
  var email = document.getElementById('pioEmail').value.trim();
  var tratamento = document.getElementById('pioTratamento').value;
  var mensagem = document.getElementById('pioMensagem').value.trim();
  if(!nome || !telefone){
    alert('Por favor, preencha ao menos nome e telefone.');
    return;
  }
  var texto = 'Olá! Vim pelo site da Clínica PIO e gostaria de agendar minha avaliação gratuita.\n\n';
  texto += 'Nome: ' + nome + '\n';
  texto += 'Telefone: ' + telefone + '\n';
  if(email){ texto += 'E-mail: ' + email + '\n'; }
  texto += 'Tratamento de interesse: ' + tratamento + '\n';
  if(mensagem){ texto += 'Mensagem: ' + mensagem + '\n'; }
  var numeroWhats = '5543991656200';
  var link = 'https://wa.me/' + numeroWhats + '?text=' + encodeURIComponent(texto);
  window.open(link, '_blank');
  document.getElementById('contactForm').reset();
});

/* ---------------------------------------------------------------------
   Paineis de equipe e cursos
   Substituem as antigas paginas equipe.html e cursos.html: o conteudo
   abre por cima da home, sem trocar de pagina.
   --------------------------------------------------------------------- */
var painelAtivo = null;
var focoAnterior = null;

function abrirPainel(id, alvo, gatilho){
  var painel = document.getElementById(id);
  if(!painel){ return; }
  if(painelAtivo && painelAtivo !== painel){ fecharPainel(); }
  /* ao trocar de painel o foco esta dentro do painel que acabou de fechar —
     nesse caso guardamos o proprio gatilho, para o Esc devolver o foco a pagina */
  var anterior = document.activeElement;
  focoAnterior = (anterior && anterior.closest && anterior.closest('.painel')) ? gatilho : anterior;
  /* monta (display:block) e forca o recalculo antes de acender a opacidade,
     senao o navegador pula a transicao de entrada */
  painel.classList.add('montado');
  void painel.offsetWidth;
  painel.classList.add('aberto');
  painel.setAttribute('aria-hidden', 'false');
  document.body.classList.add('painel-travado');
  painelAtivo = painel;

  var corpo = painel.querySelector('.painel-corpo');
  var destino = alvo ? painel.querySelector('#' + alvo) : null;
  corpo.scrollTop = destino ? (destino.offsetTop - corpo.offsetTop - 12) : 0;
  painel.querySelector('.painel-fechar').focus();
}

function fecharPainel(){
  if(!painelAtivo){ return; }
  var saindo = painelAtivo;
  saindo.classList.remove('aberto');
  saindo.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('painel-travado');
  painelAtivo = null;
  if(focoAnterior && focoAnterior.focus){ focoAnterior.focus(); }
  focoAnterior = null;
  /* so tira do fluxo depois do fade; se o painel foi reaberto nesse meio
     tempo, a classe 'aberto' volta e nao desmontamos nada */
  setTimeout(function(){
    if(!saindo.classList.contains('aberto')){ saindo.classList.remove('montado'); }
  }, 350);
}

document.querySelectorAll('[data-painel]').forEach(function(gatilho){
  gatilho.addEventListener('click', function(e){
    e.preventDefault();
    abrirPainel(gatilho.getAttribute('data-painel'), gatilho.getAttribute('data-alvo'), gatilho);
  });
});

document.querySelectorAll('[data-fechar]').forEach(function(el){
  el.addEventListener('click', function(){ fecharPainel(); });
});

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape' && painelAtivo){ fecharPainel(); }
});

/* mantem o Tab preso dentro do painel enquanto ele estiver aberto */
document.addEventListener('keydown', function(e){
  if(e.key !== 'Tab' || !painelAtivo){ return; }
  var focaveis = painelAtivo.querySelectorAll('a[href], button:not([disabled])');
  if(!focaveis.length){ return; }
  var primeiro = focaveis[0];
  var ultimo = focaveis[focaveis.length - 1];
  if(e.shiftKey && document.activeElement === primeiro){
    e.preventDefault();
    ultimo.focus();
  } else if(!e.shiftKey && document.activeElement === ultimo){
    e.preventDefault();
    primeiro.focus();
  }
});

/* quem chegar por link antigo (site.com/#equipe-painel) ja abre o painel */
if(location.hash === '#equipe-painel'){ abrirPainel('painel-equipe'); }
if(location.hash === '#cursos-painel'){ abrirPainel('painel-cursos'); }
