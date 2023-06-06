# SDBOT

<h4> O que o bot faz? </h4>

- O bot simula uma conta aberta dentro do servidor, e você pode controlar pelo Discord. Sempre que o servidor reiniciar, ele voltará de onde parou com todas as contas que você configurar. Esse bot serve para farmar com suas contas, sem precisar ficar com vários Minecraft abertos. Você pode usar uma VPS para farmar 24 horas por dia, sem muito custos.

 # Como usar
<h4>Criar um bot do Discord</h4>

- Primeiro você precisa criar um bot do discord em <a href="https://discord.com/developers/applications">Discord Dev</a>
- chame ele para um grupo privado onde você tenha permissoes e de a ele um cargo com administrador

<h4>Instalar node.js + dependencias</h4>

- Para o bot funcionar você precisa instalar <a href="https://nodejs.org/en">Node.js</a>
- Abra o aquivo ```Instalador.bat``` para instalar as dependencias e aguarde ele ficar verde

<h4>Configuração</h4>
Para começar, você precisa editar o arquivo config.json com os dados do seu bot.
<p>

```
{
    "discordToken": "BOT_TOKEN",
    "channelId": "SEU_ID_DO_CANAL_DISCORD"
}
```

- Para pegar ID do canal do discord você precisa colocar seu discord em modo administrador, para isso va em configurações > avançado > modo desenvolvedor e ative a caixinha.
volte para seu grupo no discord, clique com o botão direito em um canal de chat de sua escolha e clique em copiar ID do canal e cole em SEU_ID_DO_CANAL_DISCORD

<h4>Como configurar suas contas</h4>

- Abra o arquivo accounts.txt e complete da seguinte forma:

- exemplo conta original: 

```
seunick:123:/pw suapw:microsoft
```

- Para conta original quando iniciar o bot, um link será exibido no CMD. Você precisa Copiar e colar no seu navegador nesse link e fazer login com sua conta Microsoft. Depois disso, você será conectado como Nintendo Switch e sua conta original ira conectar no servidor.

- Exemplo conta pirata:

```
seunick:suasenha:/pw suapw:
```

- Para conta pirata ela ira logar normalmente no servidor sem problemas.

<h4>Iniciar o Bot <h4>

- Para iniciar o Bot você precisa abrir o arquivo `Iniciar BOT.bat` e dar enter.

- Pronto! agora você pode farmar em problemas. sempre que o servidor reniciar as contas configuradas irão retornar para pw configurada

</br>


- Lista de comandos:

```
{NICKBOT} = Nick da conta no TXT
{ALL} = Todas contas do TXT (NÃO RECOMENDO UTILIZAR COM +CHAT)
{MENSSAGEM / COMANDO} = Uma menssagem ou comando para o bot enviar
{PÁGINA} = Numero da página para verificar
{PLAYER} = Nick do usuario que você quer verificar o money

+stop        {NICKBOT}  Pausa uma conta de bots logado.
+start       {NICKBOT}  Inicia uma conta de bot que foi pausado.
+restart     {NICKBOT}  Reinicia o bot selecionado.
+anunciar    {NICKBOT} {MENSSAGEM / COMANDO}  Anuncia ou executa um comando a cada 25 Minutos.
+chat        {NICKBOT} {MENSSAGEM / COMANDO}  Envia uma menssagem no chat (nao use ALL).
+moneyother  {NICKBOT} {PLAYER} Verifica quantidade de money de uma conta especifica.
+xmoney      {NICKBOT} ou {ALL}  Verifica quantidade de money de suas contas no bot.
+mtop        {NICKBOT} {PÁGINA} Verifica o money top atual.
+kitmensal   {NICKBOT} Pega o kit mensal.
+cactus      {NICKBOT} Compra Boost de 12% de cactus.
+cana        {NICKBOT} Compra Boost de 12% de cana.
+melancia    {NICKBOT} Compra Boost de 12% de melancia.
+abobora     {NICKBOT} Compra Boost de 12% de abobora.
```

- Outros comandos e funções serão adicionados no futuro
