import { useState } from "react";
import { Helmet } from 'react-helmet-async';

const Commands = () => {
    
    // Filters List
    // all, confessions, moderation, fun, emotes, utility
    const [filters] = useState([
        {filterName: 'Todos', filterID:"all", id: 1},
        {filterName: 'Información', filterID:"info", id: 2},
        {filterName: 'IA', filterID:"ai", id: 3},
        {filterName: 'Utilidad', filterID:"utils", id: 4},
     //   {filterName: 'Emotes', filterID:"emotes", id: 5},
     //   {filterName: 'Utility', filterID:"utility", id: 6}
    ])

    // Commands List
    const [commands] = useState([
        {commandName: '/help', commandDesc:"Una lista completa de los comandos de PogoGPT", commandUsage:"/help", filter:"info", id: 1},
        {commandName: '/ping', commandDesc:"Muestra la latencia de PogoGPT", commandUsage:"/ping", filter:"info", id: 2},
        {commandName: '/ask', commandDesc:"Obten respuesta a todas tus preguntas", commandUsage:"/ask [mensaje]", filter:"ai", id: 3},
        {commandName: '/imagine', commandDesc:"Haz que PogoGPT dibuje todo lo que te imaginás", commandUsage:"/imagine [mensaje]", filter:"ai", id: 4},
        {commandName: '/optimize', commandDesc:"Haz que PogoGPT optimize y mejore tus mensajes importantes", commandUsage:"/optimize [mensaje]", filter:"ai", id: 5},
        {commandName: '/translate', commandDesc:"Traduce tu texto de cualquier idioma al ingles", commandUsage:"/translate [texto]", filter:"ai", id: 6},
        {commandName: '/invite', commandDesc:"Invita a PogoGPT a tu servidor", commandUsage:"/invite", filter:"utils", id: 7},
        {commandName: '/vote', commandDesc:"Vota por PogoGPT en Top.gg o Botlist.me", commandUsage:"/vote", filter:"utils", id: 8},
        {commandName: '/donate', commandDesc:"Ayúdanos a mantener activo a PogoGPT haciendo donaciones", commandUsage:"/donate", filter:"utils", id: 9}
    ])

    //Button Handlers
    const [selectedCommand, setSelectedCommand] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState('all');

    const handleClickCommand = (commandId) => {
        setSelectedCommand(commandId === selectedCommand ? null : commandId);
    };
    const handleClickFilter = (filter) => {
        setSelectedFilter(filter === selectedFilter ? 'all' : filter);
    };

    return ( 
        <div className="CommandsContent">
            <Helmet>
                <title>Comandos • PogoGPT</title>
                <meta property="og:title" content="Comandos • PogoGPT" />
                <meta name="description" content="La lista de comandos de PogoGPT." />
                <meta property="og:description" content="La lista de comandos de PogoGPT." />
                <meta property="og:url" content="ai.pogoos.com/commands" />
            </Helmet>
            <div className="CommandsLayoutContainer">
                <div className="CommandBoxContainer">
                <div className="CommandAltAnimationHandler"> 
                    <div className="CommandsSectionTitle">Comandos</div>
                    <div className="CommandsFilterContainer">
                    {filters.map((filter) => (
                        <div className="FilterButton" id={`${filter.filterID === selectedFilter ? "selected" : "" }`} onClick={() => handleClickFilter(filter.filterID)} key={filter.id}>
                            <div className="FilterTitle">{filter.filterName}</div>
                        </div>
                    ))}
                </div>
                </div>
                <div className="CommandListContainer">
                    {commands.map((command, index) => (
                        <div className="CommandBubbleAnimationHandler" style={{ animationDelay: `${25 * index}ms` }} key={command.id}>
                            <div className={`${command.id === selectedCommand ? "CommandBubbleExpanded" : "CommandBubble" }`} id={`${command.filter === selectedFilter || 'all' === selectedFilter ? "" : "inactive" }`} key={command.id} onClick={() => handleClickCommand(command.id)}>
                                <div className="CommandBubbleInsideContainer">
                                    <div className="CommandBubbleNonExpandedContainer">
                                        <div className="CommandBubbleTitleContainer">
                                            <div className="CommandBubbleTitle">{command.commandName}</div>
                                            <div className="CommandBubbleExpandArrow" id={`menuButton_${command.id === selectedCommand ? 'active' : 'inactive'}`}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="dropdownIcon" id={`dropdownIcon_${command.id === selectedCommand ? 'active' : 'inactive'}`}><path d="M7 14.5l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                        </div>
                                        <div className="CommandBubbleDesc">{command.commandDesc}</div>
                                    </div>
                                    <div className="CommandBubbleExpandedContainer" id={`${command.id === selectedCommand ? "" : "inactive" }`} >
                                        <div className="CommandBubbleField">
                                            <div className="CommandBubbleFieldTitle">Usage</div>
                                            <div className="CommandBubbleFieldSubTitleContainer" id="usage">
                                                <div className="CommandBubbleFieldSubTitle">
                                                    {command.commandUsage} 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="CommandBubbleField">
                                            <div className="CommandBubbleFieldTitle">Category</div>
                                            <div className="CommandBubbleFieldSubTitle">{command.filter}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    ))}
                </div>    
            </div>
            </div>
        </div>
     );
}
 
export default Commands;