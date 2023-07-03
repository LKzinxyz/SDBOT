# MINEBOT

<h2> O que o BOT faz? </h2>

- O BOT simula uma conta aberta dentro do servidor, e você pode controlar pelo Discord. Sempre que o servidor reiniciar, ele voltará de onde parou com todas as contas que você configurar. Esse BOT serve para farmar com suas contas, sem precisar ficar com vários Minecraft abertos. Você pode usar uma VPS para farmar 24 horas por dia, sem muito custos.

 # Como usar
<h4>Criar um BOT do Discord</h4>

- Primeiro você precisa criar um BOT do discord em <a href="https://discord.com/developers/applications">Discord Dev</a>
- Ative estas 3 caixinhas 

<div align="center" dir="auto">

![image](https://github.com/LKzinxyz/SDBOT/assets/122848089/30cab846-fbca-465f-a3e9-20e75d50eae9)

</div
 
- Chame-o para um grupo privado no qual você tenha permissões e de um cargo de administrador.

<h4>Instalar node.js + dependências</h4>

- Para o BOT funcionar você precisa instalar <a href="https://nodejs.org/en">Node.js</a>
- Abra o arquivo `Instalador.bat` para instalar as dependências e aguarde a conclusão da instalação.

<h4>Configuração</h4>
Para começar, você precisa editar o arquivo config.json com os dados do seu BOT.
<p>

```
{
    "discordToken": "BOT_TOKEN",
    "channelId": "SEU_ID_DO_CANAL_DISCORD"
}
```
- Para obter o DISCORD TOKEN, clique em 'Reset token' na página do Discord Dev.

<div align="center" dir="auto">

![image](https://github.com/LKzinxyz/SDBOT/assets/122848089/ddef8818-7130-4b2f-ae0e-0f3b03db99de)

</div>

- Para pegar ID do canal do discord você precisa colocar seu discord em modo administrador, para isso va em configurações > avançado > modo desenvolvedor e ative a caixinha.

<div align="center" dir="auto">

 ![image](https://github.com/LKzinxyz/SDBOT/assets/122848089/baade82d-bb91-445b-899c-7cec87a429e6)

</div>

- Volte para seu grupo no discord, clique com o botão direito em um canal de chat de sua escolha e clique em copiar ID do canal e cole em SEU_ID_DO_CANAL_DISCORD


<h4>Como configurar suas contas</h4>

- Abra o arquivo accounts.txt e complete da seguinte forma:

- exemplo conta original: 

```
seunick:123:/pw suapw:microsoft
```

- Para conta original quando iniciar o BOT, um link será exibido no CMD. Você precisa Copiar e colar no seu navegador nesse link e fazer login com sua conta Microsoft. Depois disso, você será conectado como Nintendo Switch e sua conta original ira conectar no servidor.

- Exemplo conta pirata:

```
seunick:suasenha:/pw suapw:
```

- Para conta pirata ela ira logar normalmente no servidor sem problemas.

<h4>Iniciar o BOT</h4>

- Para iniciar o BOT, abra o arquivo ```Iniciar BOT.bat``` e aguarde. As contas entrarão automaticamente no servidor.

- Pronto! agora você pode farmar em problemas. sempre que o servidor reniciar as contas configuradas irão retornar para pw configurada

</br>

<h4>Lista de comandos:</h4>

```
{NICKBOT} = Nick da conta no TXT
{ALL} = Todas contas do TXT (NÃO RECOMENDO UTILIZAR COM +CHAT)
{MENSSAGEM / COMANDO} = Uma menssagem ou comando para o BOT enviar
{PÁGINA} = Numero da página para verificar
{PLAYER} = Nick do usuario que você quer verificar o money

+stop        {NICKBOT}  Pausa uma conta de BOTs logado.
+start       {NICKBOT}  Inicia uma conta de BOT que foi pausado.
+restart     {NICKBOT}  Reinicia o BOT selecionado.
+anunciar    {NICKBOT} {MENSSAGEM / COMANDO}  Anuncia ou executa um comando a cada 30 Minutos.
+chat        {NICKBOT} {MENSSAGEM / COMANDO}  Envia uma menssagem no chat (nao use ALL).
+moneyother  {NICKBOT} {PLAYER} Verifica quantidade de money de uma conta especifica.
+xmoney      {NICKBOT} ou {ALL}  Verifica quantidade de money de suas contas no BOT.
+mtop        {NICKBOT} {PÁGINA} Verifica o money top atual.
+kitmensal   {NICKBOT} Pega o kit mensal.
+cactus      {NICKBOT} Compra Boost de 12% de cactus.
+cana        {NICKBOT} Compra Boost de 12% de cana.
+melancia    {NICKBOT} Compra Boost de 12% de melancia.
+abobora     {NICKBOT} Compra Boost de 12% de abobora.
```

- Outros comandos e funções serão adicionados no futuro

