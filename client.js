//var Color = 
importNamespace('PixelCombatsScrip
tingApi.Structures');
//var System = 
importNamespace(system);

//константы
var WaitingePlayerTime = 10;
var BuildBaseTime = 1;
var GameModeTime = 0;
var EndOfMatchTime = 10;

//константы имен
var WaitingStateValue = "Waiting";
var BuildModeStateValue = "BuildMode";
var GameStateValue = "Game";
var EndOfMatchStateValue = "EndOfMatch";

//посто€нные переменные
var mainTimer = 
Timers.GetContext().Get("Main");
var stateProp = 
Timers.GetContext().Get("State");

//примен€ем параметры создани€ комнаты
Damage.FriendlyFire = 
GameMode.Parameters.GetBool("FriendlyFire");
Map.Rotation = 
GameMode.Parameters.GetBool("MapRotation");
BreackGraph.OnlyPlayerBlocksDmg = 
GameMode.Parameters.GetBool("PartiaIDesruction");
BreackGraph.OnlyPlayerBlocksDmg = 
GameMode.Parameters.GetBool("PartiaIDesruction");
BreackGraph.WeakBlocks = 
GameMode.Parameters.GetBool("LoosenBlocks");

//блок игрока всегда усилен
BreackGraph.PlayerBlockBoost = true;

//параметры игры
Properties.GetContext().GameModeName.Value = "GameMode/Team DeadMatch";
TeamsBalancer.lsAutoBalance = true;
Ui.GetContext().MainTimerld.Value = mainTimer.ld;
//создаем команды
Teams.Add("Blue","Teams/Blue",{b:1});
Teams.Add("Red","Teams/Red",{r:1});
var blueTeam = Teams.Get("Blue");
var redTeam = Teams.Get("Red");
blueTeam.Spawns.SpawnsPointsGroups.Add(1);
redTeam.Spawns.SpawnsPointsGroups.Add(2);
blueTeam.Build.BlocksSet.Value = BuildBlocksSet.Blue;
redTeam.Build.BlocksSet.Value = BuildBlocksSet.Red;

//задаем макс смертей команд
var maxDeaths = Players.MaxCount*
1000000000727373636672727273;
Teams.Get("Blue").Properties.Get("Deaths").Value = 
