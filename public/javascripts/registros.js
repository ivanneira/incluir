/**
 * Created by Ivan on 02/05/2018.
 */

var tipoPension;
var tipoVivienda;
var tipoServicios;
//TODO: traer userid sin forzar
var userid = userID;
var planillaid;
var filaID = '';

var filaplanillaid;

var motivos;

var map;

//barrios hardcodeados hasta nuevo aviso
var barrio =
    ' <option value="0">Desconocido</option>' +
    '     <option value="1">Bo. ALGARROBO VERDE</option>' +
    ' <option value="2">BO. CASU</option>' +
    '     <option value="3">Bo. CONJUNTO II Va. SANTA ROSA</option>' +
    ' <option value="4">Bo. de la Municipalidad</option>' +
    ' <option value="5">Bo. DON BOSCO</option>' +
    ' <option value="6">Bo. LA CHIMBERA</option>' +
    ' <option value="7">Bo. LA CHIMBERA II</option>' +
    ' <option value="8">Bo. LA CHIMBERA OESTE</option>' +
    ' <option value="9">Bo. LOS ALGARROBOS</option>' +
    ' <option value="10">Bo. SANTA ROSA o PADRE MAGGIO</option>' +
    ' <option value="11">Bo. TUPELI II</option>' +
    ' <option value="12">Bo. VILLA BORJAS</option>' +
    ' <option value="13">Va. BERETTA</option>' +
    '     <option value="14">Va. BORJAS</option>' +
    '     <option value="15">Va. EL TANGO</option>' +
    ' <option value="16">Va. SANTA ROSA</option>' +
    ' <option value="17">Bo. 9 DE JULIO II</option>' +
    ' <option value="18">Bo. DE LA ESTACION (N y S)</option>' +
    ' <option value="19">Bo. del gobierno provincial</option>' +
    ' <option value="21">Bo. LAS CHACRITAS</option>' +
    ' <option value="22">Va. 9 DE JULIO</option>' +
    ' <option value="24">Bo. ASOCIACION OBRERA MINERA</option>' +
    ' <option value="25">Bo. Asos. SOLARES DEL VILLICUM</option>' +
    ' <option value="26">Bo. EL RINCON</option>' +
    ' <option value="28">Bo. ESPAÑA</option>' +
    '     <option value="29">Bo. LA CAÑADA</option>' +
    ' <option value="30">Bo. LA ESTRELLA</option>' +
    ' <option value="31">Bo. LA LAJA</option>' +
    ' <option value="32">Bo. LOS CIRUELOS</option>' +
    ' <option value="33">Bo. LOS MILAGROS</option>' +
    ' <option value="34">Bo. LOZANO</option>' +
    '     <option value="35">Bo. LUJAN</option>' +
    '     <option value="36">Bo. PORTAL DE ALBARDON</option>' +
    ' <option value="37">Bo. PRESIDENTE N. KICHNER</option>' +
    ' <option value="38">Bo. RECABARREN</option>' +
    '     <option value="39">Bo. RICARDO BALBIN</option>' +
    ' <option value="40">Bo. SAN MARTIN</option>' +
    ' <option value="41">LOTE HOGAR Nro 6</option>' +
    ' <option value="42">Va. ALCIRA</option>' +
    '     <option value="43">Va. AMPACAMA</option>' +
    '     <option value="44">Va. CAMPO AFUERA</option>' +
    ' <option value="45">Va. ELENA</option>' +
    '     <option value="46">Va. LUJAN</option>' +
    '     <option value="47">Va. SAN MIGUEL</option>' +
    ' <option value="48">Va. SANTA BARBARA</option>' +
    ' <option value="49">Va. VILLICUM</option>' +
    '     <option value="52">Bo. 14 DE MAYO</option>' +
    ' <option value="53">Bo. CAMPO DE BATALLA</option>' +
    ' <option value="54">Bo. del IPV</option>' +
    ' <option value="55">Bo. EL BOSQUE</option>' +
    ' <option value="56">Bo. EL TRIUNFO</option>' +
    ' <option value="57">Bo. EVA PERON</option>' +
    ' <option value="58">Bo. SEFAIR (IPV)</option>' +
    '     <option value="59">Bo. VILLA EL SALVADOR</option>' +
    ' <option value="60">Va. SEFAIR</option>' +
    '     <option value="61">Bo. ALKAZAR</option>' +
    '     <option value="62">Bo. CENTINELA IV</option>' +
    ' <option value="63">Bo. de Asociacion Don Bosco</option>' +
    ' <option value="64">Bo. DE OFICIALES</option>' +
    ' <option value="65">Bo. del IPV</option>' +
    ' <option value="67">Bo. FORMOSA o Bo. CNEL FONTANA</option>' +
    ' <option value="68">Bo. GENDARMERIA o SUBOFICIALES</option>' +
    ' <option value="69">Bo. LA CAPILLA</option>' +
    ' <option value="70">Bo. LA ISLA</option>' +
    ' <option value="71">Bo. LA MERCED</option>' +
    ' <option value="72">Bo. LOS SAUCES</option>' +
    ' <option value="73">Bo. PELLEGRINI</option>' +
    '     <option value="74">Bo. RIM 22</option>' +
    ' <option value="75">Bo. RIO CALINGASTA</option>' +
    ' <option value="76">Bo. TAMBERIAS</option>' +
    '     <option value="77">Bo. VILLA PITUIL</option>' +
    ' <option value="78">Va. CALINGASTA</option>' +
    '     <option value="79">Bo. 12 DE OCTUBRE</option>' +
    ' <option value="80">Bo. 15 DE DICIEMBRE</option>' +
    ' <option value="81">Bo. 15 DE MAYO</option>' +
    ' <option value="82">Bo. 25 DE MAYO</option>' +
    ' <option value="83">Bo. 5 DE DICIEMBRE</option>' +
    ' <option value="84">Bo. 7 DE SEPTIEMBRE</option>' +
    ' <option value="85">Bo. AGROS</option>' +
    '     <option value="86">Bo. AROMAS DE LA VID</option>' +
    ' <option value="87">Bo. AROMAS DE LA VID II</option>' +
    ' <option value="88">Bo. ARTURO FRONDIZZI</option>' +
    ' <option value="89">Bo. ASOCIACION BANCARIA</option>' +
    ' <option value="90">Bo. ASUNCION</option>' +
    '     <option value="91">Bo. BANDERA ARGENTINA</option>' +
    ' <option value="92">Bo. BARDIANI</option>' +
    '     <option value="93">Bo. CANADA</option>' +
    '     <option value="94">Bo. CAROLINA II</option>' +
    ' <option value="95">Bo. CATTANI</option>' +
    ' <option value="96">Bo. CENTENARIO DEL BONO</option>' +
    ' <option value="97">Bo. CHACABUCO</option>' +
    '     <option value="98">Bo. COMANDANTE CABOT</option>' +
    ' <option value="99">Bo. CONVIECO</option>' +
    '     <option value="100">Bo. COOPERARQ III</option>' +
    ' <option value="101">Bo. CORRIENTES</option>' +
    '     <option value="102">Bo. COSTA CANAL</option>' +
    ' <option value="103">Bo. CRAS</option>' +
    '     <option value="104">Bo. DEL BONO</option>' +
    ' <option value="105">Bo. DEL CARMEN</option>' +
    ' <option value="106">Bo. DORREGO</option>' +
    '     <option value="107">Bo. ECHEVARRIA</option>' +
    '     <option value="110">Bo. ENFERMERA MEDINA</option>' +
    ' <option value="111">Bo. ESTACION WILKINSON</option>' +
    ' <option value="112">Bo. FEDERACION DE VIÑATEROS</option>' +
    ' <option value="113">Bo. FERMIN RODRIGUEZ</option>' +
    ' <option value="114">Bo. FERROCARRIL SUR</option>' +
    ' <option value="115">Bo. FRATERNIDAD</option>' +
    '     <option value="116">Bo. FRAY J. STA. M. DE ORO</option>' +
    ' <option value="117">Bo. FRAY MAMERTO ESQUIU</option>' +
    ' <option value="118">Bo. FUVA</option>' +
    '     <option value="119">Bo. GENERAL ACHA</option>' +
    ' <option value="120">Bo. GRAL GUEMES</option>' +
    ' <option value="121">Bo. GRAL. LAS HERAS</option>' +
    ' <option value="122">Bo. HIDRAULICA</option>' +
    '     <option value="123">Bo. INTA</option>' +
    '     <option value="124">Bo. JARDIN MUNICIPAL</option>' +
    ' <option value="125">Bo. JARDIN PUERTAS DELSOL</option>' +
    ' <option value="126">Bo. JARDIN SANTA CECILIA</option>' +
    ' <option value="127">Bo. JUAN XXIII</option>' +
    ' <option value="128">Bo. LAS ACACIAS</option>' +
    ' <option value="129">Bo. LAS LILAS</option>' +
    ' <option value="130">Bo. LAS ROSAS</option>' +
    ' <option value="131">Bo. LOS ALAMOS</option>' +
    ' <option value="132">Bo. LOS ALAMOS II</option>' +
    ' <option value="133">Bo. LOS PARAISOS</option>' +
    ' <option value="134">Bo. LOS PARAISOS - Ampliacion</option>' +
    ' <option value="135">Bo. LOS TILOS</option>' +
    ' <option value="136">Bo. LOS TRONCOS</option>' +
    ' <option value="137">Bo. LUZ Y FUERZA DE SAN JUAN</option>' +
    ' <option value="138">Bo. MANANTIAL</option>' +
    '     <option value="139">Bo. MISIONES</option>' +
    '     <option value="140">Bo. MITRE</option>' +
    '     <option value="141">Bo. MUTUAL BANCO SAN JUAN</option>' +
    ' <option value="142">Bo. NATANIA III</option>' +
    ' <option value="143">Bo. NATANIA RESIDENCIAL</option>' +
    ' <option value="144">Bo. NECOCHEA</option>' +
    '     <option value="145">Bo. NORTE</option>' +
    '     <option value="146">Bo. NUEVO DEL BONO</option>' +
    ' <option value="147">Bo. NUEVO RESIDENCIAL - EL REM</option>' +
    ' <option value="148">Bo. OSSE</option>' +
    '     <option value="149">Bo. PALERMO</option>' +
    '     <option value="150">Bo. PARQUE DE MAYO</option>' +
    ' <option value="151">Bo. PARQUE UNIVERSITARIO</option>' +
    ' <option value="152">Bo. PATRICIAS SANJUANINAS</option>' +
    ' <option value="153">Bo. PONCE</option>' +
    '     <option value="154">Bo. PORRES</option>' +
    '     <option value="155">Bo. PORTAL</option>' +
    '     <option value="156">Bo. PROVINCIA DE TUCUMAN</option>' +
    ' <option value="157">Bo. RIM 22</option>' +
    ' <option value="158">Bo. RESIDENCIAL</option>' +
    '     <option value="159">Bo. RESIDENCIAL TULUM</option>' +
    ' <option value="160">Bo. ROBLEDAL</option>' +
    '     <option value="161">Bo. SAN ANTONIO</option>' +
    ' <option value="162">Bo. SAN MARTIN</option>' +
    ' <option value="163">Bo. SANTA JACINTA</option>' +
    ' <option value="164">Bo. SANTA TERESITA</option>' +
    ' <option value="165">Bo. SATURNINO SARASSA</option>' +
    ' <option value="166">Bo. SMATA</option>' +
    '     <option value="167">Bo. SMATA II</option>' +
    ' <option value="168">Bo. SOLARES DE OTOÑO</option>' +
    ' <option value="169">Bo. SOLARES DE SAN JUAN I</option>' +
    ' <option value="170">Bo. SOLARES DE SAN JUAN II</option>' +
    ' <option value="171">Bo. SOLARES DE SAN JUAN III</option>' +
    ' <option value="172">Bo. SOLARES DE SAN JUAN IV</option>' +
    ' <option value="173">Bo. SOLARES DE SAN JUAN V</option>' +
    ' <option value="174">Bo. SUR</option>' +
    '     <option value="175">Bo. UNIVERSITARIO</option>' +
    '     <option value="176">Bo. URQUIZA</option>' +
    '     <option value="177">Bo. URUGUAY</option>' +
    '     <option value="178">Bo. UV Va. DEL CARRIL</option>' +
    ' <option value="179">Bo. VESTA</option>' +
    '     <option value="180">Bo. VILLICUM</option>' +
    '     <option value="181">Bo. WALTER MELCHER</option>' +
    ' <option value="182">Bo. WALTER MELCHER I</option>' +
    ' <option value="183">LOTE HOGAR Nro 40</option>' +
    ' <option value="184">Va. AMERICA</option>' +
    ' <option value="185">Va. CAROLINA</option>' +
    '     <option value="186">Va. DEL CARRIL</option>' +
    ' <option value="187">Va. DEL PARQUE</option>' +
    ' <option value="188">Va. DON MANUEL</option>' +
    ' <option value="189">Va. DON PEDRO</option>' +
    ' <option value="190">Va. DORREGO</option>' +
    '     <option value="191">Va. DUBOS</option>' +
    '     <option value="192">Va. EL PINO</option>' +
    ' <option value="193">Va. FAUSTO CARRASCO</option>' +
    ' <option value="194">Va. FERROCARRIL BELGRANO</option>' +
    ' <option value="195">Va. FERROCARRIL NORTE</option>' +
    ' <option value="196">Va. GARBINI</option>' +
    '     <option value="197">Va. GRAL PAZ</option>' +
    ' <option value="198">Va. GREMOLICHE</option>' +
    '     <option value="199">Va. HIDRAULICA (Asentamiento)</option>' +
    '     <option value="200">Va. IZORIAGA</option>' +
    '     <option value="201">Va. JUAN JUFRE</option>' +
    ' <option value="202">Va. LICCCIARDI</option>' +
    '     <option value="203">Va. MALLEA</option>' +
    '     <option value="204">Va. MARGARITA</option>' +
    '     <option value="205">Va. MATURANO</option>' +
    '     <option value="206">Va. NUEVA</option>' +
    '     <option value="207">Va. NUEVO PALERMO</option>' +
    ' <option value="208">Va. PALERMO</option>' +
    '     <option value="209">Va. PONTORIERO</option>' +
    '     <option value="210">Va. RIPOL</option>' +
    '     <option value="211">Va. SAFE</option>' +
    '     <option value="212">Va. SAN ANDRES</option>' +
    ' <option value="213">Va. SAN MARTIN SUR</option>' +
    ' <option value="214">Va. SANTA CRUZ</option>' +
    ' <option value="215">Va. SANTA FILOMENA</option>' +
    ' <option value="216">Va. SANTA ROSA</option>' +
    ' <option value="217">Va. STORNI</option>' +
    '     <option value="218">Va. TIMOTEO MARADONA</option>' +
    ' <option value="219">Va. UNION</option>' +
    '     <option value="220">Va. URQUIZA</option>' +
    '     <option value="221">Va. VICTORIA</option>' +
    '     <option value="222">Bo. 9 DE JULIO</option>' +
    ' <option value="223">Bo. ALEM</option>' +
    '     <option value="224">Bo. AREA I</option>' +
    ' <option value="225">Bo. AREA II</option>' +
    ' <option value="226">Bo. BERMEJO</option>' +
    '     <option value="227">Bo. CAUCETE</option>' +
    '     <option value="228">Bo. CAUCETE o IGLESIA DE JESUC</option>' +
    ' <option value="229">Bo. CESAR AGUILAR - AREA II</option>' +
    ' <option value="230">Bo. DIFUNTA CORREA - VALLECITO</option>' +
    ' <option value="231">Bo. EMILIO ENOE MENDOZA</option>' +
    ' <option value="232">Bo. EMPLEADOS DE COMENRCIO</option>' +
    ' <option value="233">Bo. Empleados Municipales</option>' +
    ' <option value="235">Bo. FELIPE COBAS</option>' +
    ' <option value="236">Bo. GUAYAGUAS</option>' +
    '     <option value="237">Bo. GUAYAMA</option>' +
    '     <option value="238">Bo. HUARPES</option>' +
    '     <option value="239">Bo. I DE LA ROZA - AREA II</option>' +
    ' <option value="240">Bo. INDEPENDENCIA</option>' +
    '     <option value="241">Bo. INDUSTRIAL</option>' +
    '     <option value="242">Bo. JUAN JUFRE</option>' +
    ' <option value="243">Bo. JUSTO P. CASTRO</option>' +
    ' <option value="244">Bo. JUSTO P. CASTRO II</option>' +
    ' <option value="245">Bo. JUSTO P. CASTRO III</option>' +
    ' <option value="246">Bo. JUSTO P. CASTRO IV</option>' +
    ' <option value="247">Bo. LOS OLIVOS</option>' +
    ' <option value="248">Bo. MARAYES</option>' +
    '     <option value="249">Bo. NIQUIZANGA</option>' +
    '     <option value="250">Bo. PIE DE PALO</option>' +
    ' <option value="251">Bo. RUTA 20</option>' +
    ' <option value="252">Bo. SAN JUAN III</option>' +
    ' <option value="253">Bo. SAN MARTIN</option>' +
    ' <option value="254">Bo. SAN NICOLAS</option>' +
    ' <option value="255">LOTE HOGAR Nro 37</option>' +
    ' <option value="256">Va. BERMEJO</option>' +
    '     <option value="257">Va. ETELVINA</option>' +
    '     <option value="258">Va. INDEPENDENCIA</option>' +
    '     <option value="259">Va. JUANITA</option>' +
    '     <option value="260">Va. LAS ROSAS</option>' +
    ' <option value="261">Va. PALACIOS</option>' +
    '     <option value="262">Va. RIVADAVIA</option>' +
    '     <option value="263">Va. SANTA ISABEL</option>' +
    ' <option value="264">Bo, PROVIDENCIA II</option>' +
    ' <option value="265">Bo. 17 DE OCTUBRE</option>' +
    ' <option value="266">Bo. 19 DE ABRIL</option>' +
    ' <option value="267">Bo. 1ro DE NOVIEMBRE</option>' +
    ' <option value="268">Bo. 22 DE DICIEMBRE (FARMACIAS</option>' +
    '     <option value="269">Bo. 25 DE DICIEMBRE - (L. HOGA</option>' +
    ' <option value="270">Bo. 30 DE AGOSTO</option>' +
    ' <option value="271">Bo. 5 DE OCTUBRE</option>' +
    ' <option value="272">Bo. 7 CONJUNTO S II</option>' +
    ' <option value="273">Bo. 7 DE SEPTIEMBRE IV</option>' +
    ' <option value="274">Bo. AMPE 20 DE JUNIO</option>' +
    ' <option value="275">Bo. ARAS GRAL. BELGRANO</option>' +
    ' <option value="276">Bo. ARENALES</option>' +
    '     <option value="277">Bo. BUENOS AIRES</option>' +
    ' <option value="278">Bo. CALANDRIAS</option>' +
    '     <option value="279">Bo. CATAMARCA</option>' +
    '     <option value="280">Bo. CENTENARIO</option>' +
    '     <option value="281">Bo. CENTINELA III</option>' +
    ' <option value="282">Bo. CGT CHIMBAS</option>' +
    ' <option value="283">Bo. CHIMBAS II</option>' +
    ' <option value="284">Bo. CHMBAS CIPOLLETTI</option>' +
    ' <option value="285">Bo. CIRCULO POLICIAL</option>' +
    ' <option value="286">Bo. COM SAN MIGUEL o LOS ANDES</option>' +
    ' <option value="287">Bo. COMPLEJO LAS LAJAS</option>' +
    ' <option value="288">Bo. Comuna SAN MIGUEL</option>' +
    ' <option value="289">Bo. COSTANERA III</option>' +
    ' <option value="290">Bo. DEL INCA</option>' +
    ' <option value="291">Bo. del Municipio</option>' +
    ' <option value="292">Bo. EL CHAÑAR</option>' +
    ' <option value="295">Bo. ENOE BRAVO</option>' +
    ' <option value="296">Bo. FRAGATA SARMIENTO</option>' +
    ' <option value="297">Bo. HORTALIZAS DEL PARAISO</option>' +
    ' <option value="298">Bo. JUAN PABLO II</option>' +
    ' <option value="299">Bo. JUAN XXIII</option>' +
    ' <option value="300">Bo. LA AMISTAD</option>' +
    ' <option value="301">Bo. LA PAMPA</option>' +
    ' <option value="302">Bo. LAPRIDA</option>' +
    '     <option value="303">Bo. LAS ALONDRAS</option>' +
    ' <option value="304">Bo. LAS CALANDRIAS</option>' +
    ' <option value="305">Bo. LAS MARGARITAS</option>' +
    ' <option value="306">Bo. LAS VICUÑAS</option>' +
    ' <option value="307">Bo. LOS ALERCES</option>' +
    ' <option value="308">Bo. LOS CARDOS</option>' +
    ' <option value="309">Bo. LOS NEVADOS</option>' +
    ' <option value="310">Bo. LOS PINOS</option>' +
    ' <option value="311">Bo. LOS TAMARINDOS</option>' +
    ' <option value="312">Bo. Loteo SAN FELIPE II</option>' +
    ' <option value="313">Bo. LUZ Y FUERZA II</option>' +
    ' <option value="314">Bo. LUZ Y FUERZA III</option>' +
    ' <option value="315">Bo. MARTIN FIERRO</option>' +
    ' <option value="316">Bo. MARTIN GUEMES</option>' +
    ' <option value="317">Bo. MERCEDARIO</option>' +
    '     <option value="318">Bo. MOISES LEBENSHON</option>' +
    ' <option value="319">Bo. NATANIA VIII</option>' +
    ' <option value="320">Bo. NAZARIO BENAVIDES</option>' +
    ' <option value="321">Bo. NECOCHEA</option>' +
    '     <option value="322">Bo. NUEVA ARGENTINA</option>' +
    ' <option value="323">Bo. PARQUE INDEPENDENCIA  (FAE</option>' +
    '     <option value="324">Bo. PARQUE INDUSTRIAL</option>' +
    ' <option value="325">Bo. PATETA - LEBENSON</option>' +
    '     <option value="326">Bo. RESERO</option>' +
    '     <option value="327">Bo. SAN FRANCISCO I</option>' +
    ' <option value="328">Bo. SAN FRANCISCO II</option>' +
    ' <option value="329">Bo. SAN PATRICIO</option>' +
    ' <option value="330">Bo. SANCASSANI - (L. HOGAR 8)</option>' +
    ' <option value="331">Bo. SANTA CRUZ</option>' +
    ' <option value="332">Bo. SANTA ISABEL</option>' +
    ' <option value="333">Bo. SANTO DOMINGO</option>' +
    ' <option value="334">Bo. SARMIENTO</option>' +
    '     <option value="335">Bo. SINDICATO DE TELEVISION</option>' +
    ' <option value="336">Bo. SOLDADO ARGENTINO</option>' +
    ' <option value="337">Bo. TALACASTO</option>' +
    '     <option value="338">Bo. TRANSITO DE ORO</option>' +
    ' <option value="339">Bo. UPCN CHIMBAS</option>' +
    ' <option value="340">Bo. VIÑEDO LA ESTANCIA</option>' +
    ' <option value="341">Bo. VILLA PAULA</option>' +
    ' <option value="342">Bo. VIRGEN DE ANDACOLLO</option>' +
    ' <option value="343">Bo. VIRGEN DE ANDACOLLO VIII</option>' +
    ' <option value="344">LOTE HOGAR Nro 11</option>' +
    ' <option value="345">Bo. FATIMA (LOTE HOGAR Nro 23)</option>' +
    ' <option value="346">LOTE HOGAR Nro 38</option>' +
    ' <option value="347">LOTE HOGAR Nro 4</option>' +
    ' <option value="348">LOTE HOGAR Nro 42</option>' +
    ' <option value="349">LOTE HOGAR Nro 43</option>' +
    ' <option value="350">LOTE HOGAR Nro 54</option>' +
    ' <option value="351">LOTE HOGAR Nro 59</option>' +
    ' <option value="352">LOTE HOGAR Nro 62</option>' +
    ' <option value="353">LOTE HOGAR Nro 9</option>' +
    ' <option value="354">RENE FAVALORO</option>' +
    ' <option value="355">Va. ALONSO o BORREGO</option>' +
    ' <option value="356">Va. ARIZA II</option>' +
    ' <option value="357">Va. BELTRAN</option>' +
    '     <option value="358">Va. BLANCO</option>' +
    '     <option value="359">Va. CENTENARIO</option>' +
    '     <option value="360">Va. DEL SUR</option>' +
    ' <option value="361">Va. EL SALVADOR</option>' +
    ' <option value="362">Va. ESCUDERO</option>' +
    ' <option value="363">Va. GUTIERREZ</option>' +
    '     <option value="364">Va. LUCRECIA</option>' +
    '     <option value="365">Va. MARIA</option>' +
    '     <option value="366">Va. MARIANO MORENO</option>' +
    ' <option value="367">Va. MORRONE</option>' +
    '     <option value="368">Va. OBRERA</option>' +
    '     <option value="369">Va. OBSERVATORIO</option>' +
    '     <option value="370">Va. PAULA A DE SARMIENTO</option>' +
    ' <option value="371">Va. PUEYRREDON</option>' +
    '     <option value="372">Va. RAMOS</option>' +
    '     <option value="373">Va. SAN ISIDRO</option>' +
    ' <option value="374">Va. SAN JOSE</option>' +
    ' <option value="375">Va. UNION</option>' +
    '     <option value="376">Bo. del IPV</option>' +
    ' <option value="377">Bo. EL MILAGRO</option>' +
    ' <option value="378">Bo. Municipalidad de Iglesia</option>' +
    ' <option value="379">Bo. Oasis Cordillerano</option>' +
    ' <option value="380">Bo. RODEO IV</option>' +
    ' <option value="381">Bo. VILLA IGLESIA</option>' +
    ' <option value="382">Bo. ATLETICO SAN LORENZO</option>' +
    ' <option value="383">Bo. CAUQUENES I</option>' +
    ' <option value="384">Bo. Consorcio 28 DE AGOSTO</option>' +
    ' <option value="385">Bo. COOPERATIVA PISMANTA</option>' +
    ' <option value="386">Bo. del IPV</option>' +
    ' <option value="387">Bo. DOJORTI</option>' +
    '     <option value="388">Bo. DON SEGUNDO</option>' +
    ' <option value="390">Bo. FRONTERA o UDAP</option>' +
    ' <option value="391">Bo. HIPOLITO YRIGOYEN</option>' +
    ' <option value="392">Bo. HUARPES</option>' +
    '     <option value="393">Bo. LOS CAUQUENES II</option>' +
    ' <option value="394">Bo. LOS HORNOS</option>' +
    ' <option value="395">Bo. LOS NOGALES I</option>' +
    ' <option value="396">Bo. LOS NOGALES II</option>' +
    ' <option value="397">Bo. MALVINAS ARGENTINAS</option>' +
    ' <option value="398">Bo. PAMPA VIEJA</option>' +
    ' <option value="399">Bo. SAN JOSE I</option>' +
    ' <option value="400">Bo. SAN ROQUE I</option>' +
    ' <option value="401">Bo. VILLA MERCEDES</option>' +
    ' <option value="402">Bo. VILLA MERCEDES (IPV)</option>' +
    ' <option value="403">LOTE HOGAR Nro 48</option>' +
    ' <option value="404">LOTE HOGAR Nro 49</option>' +
    ' <option value="405">LOTE HOGAR Nro 65</option>' +
    ' <option value="406">Bo. 9 DE SEPTIEMBRE (LOTE HOGAR 29)</option>' +
    ' <option value="407">Bo. ABERASTAIN II</option>' +
    ' <option value="408">Bo. AGUSTIN GOMEZ</option>' +
    ' <option value="409">Bo. ANTONINO ABERASTAIN</option>' +
    ' <option value="410">Bo. As 20 DE JUNIO STA BARBARA</option>' +
    ' <option value="411">Bo. ATLETICO POCITO</option>' +
    ' <option value="412">Bo. BELLA VISTA I</option>' +
    ' <option value="413">Bo. BELLA VISTA II</option>' +
    ' <option value="414">Bo. BRISAS DEL NORTE</option>' +
    ' <option value="415">Bo. CARLOS FACUNDO MENEN</option>' +
    ' <option value="416">Bo. CLUB ABERASTAIN</option>' +
    ' <option value="417">Bo. COLANGUIL</option>' +
    '     <option value="418">Bo. Coop LEMOS</option>' +
    ' <option value="419">Bo. COOP. 8 DE NOVIEMBRE</option>' +
    ' <option value="420">Bo. de la COOP LAPRIDA</option>' +
    ' <option value="421">Bo. DE LOS CERAMISTAS II</option>' +
    ' <option value="422">Bo. de PARAMA</option>' +
    ' <option value="423">Bo. DON JOSE</option>' +
    ' <option value="424">Bo. EL CARRERITO</option>' +
    ' <option value="425">Bo. EL CERRILLO</option>' +
    ' <option value="430">Bo. EVA DUARTE DE PERON</option>' +
    ' <option value="431">Bo. FAVALORO</option>' +
    '     <option value="432">Bo. FOECYT</option>' +
    '     <option value="433">Bo. FRANCISCO VALERT</option>' +
    ' <option value="434">Bo. FRANCISCO VELERT</option>' +
    ' <option value="435">Bo. GRAL ACHA SUR</option>' +
    ' <option value="436">Bo. GRAL SOLER</option>' +
    ' <option value="437">Bo. INDEPENDENCIA</option>' +
    '     <option value="438">Bo. INT UÑAC Ex SALVADOR SUR</option>' +
    ' <option value="439">Bo. JOSE A RAMIREZ Ex RUTA 40</option>' +
    ' <option value="440">Bo. LA NUEVA RINCONADA</option>' +
    ' <option value="441">Bo. LA RINCONADA II y III</option>' +
    ' <option value="442">Bo. LAGARES</option>' +
    '     <option value="443">Bo. LAS PIEDRITAS</option>' +
    ' <option value="444">Bo. LOS FRESNOS</option>' +
    ' <option value="445">Bo. LOS GIRASOLES</option>' +
    ' <option value="446">Bo. LOS TEROS</option>' +
    ' <option value="447">Bo. LUZ Y FUERZA IV EL PARAISO</option>' +
    ' <option value="448">Bo. MEDALLA MILAGROSA</option>' +
    ' <option value="449">Bo. MEDINA SUAREZ</option>' +
    ' <option value="450">Bo. MUNICIPAL DE POCITO</option>' +
    ' <option value="451">Bo. Municipalidad POCITO</option>' +
    ' <option value="452">Bo. MUTUAL VILLA SAN MARTIN</option>' +
    ' <option value="453">Bo. NORTE  (LOTE HOGAR Nro 12)</option>' +
    ' <option value="454">Bo. PABLO MARCO</option>' +
    ' <option value="455">Bo. POCITO NORTE</option>' +
    ' <option value="456">Bo. PROVINCIA DE CHUBUT</option>' +
    ' <option value="457">Bo. QUINTO CUARTEL</option>' +
    ' <option value="458">Bo. RINCONADA</option>' +
    '     <option value="459">Bo. RIO NEGRO</option>' +
    ' <option value="460">Bo. SALVADOR NORTE</option>' +
    ' <option value="461">Bo. SAN MARTIN</option>' +
    ' <option value="462">Bo. SANTA BARBARA</option>' +
    ' <option value="463">Bo. SANTA RITA</option>' +
    ' <option value="464">Bo. SANTA ROSA</option>' +
    ' <option value="465">Bo. TADEO ROJO</option>' +
    ' <option value="466">Bo. TERESA DE CALCUTA</option>' +
    ' <option value="467">Bo. U PERS CIVIL DE LA NACION</option>' +
    ' <option value="468">Bo. U V 9 DE MAYO</option>' +
    ' <option value="469">Bo. VICTORIA NORTE</option>' +
    ' <option value="470">Bo. VILLA ABERASTAIN I</option>' +
    ' <option value="471">Bo. VILLA ABERASTAIN III</option>' +
    ' <option value="472">LOTE HOGAR Nro 13</option>' +
    ' <option value="473">LOTE HOGAR Nro 27</option>' +
    ' <option value="474">LOTE HOGAR Nro 35</option>' +
    ' <option value="475">LOTE HOGAR Nro 39</option>' +
    ' <option value="476">LOTEO HOGAR Nro 33</option>' +
    ' <option value="477">Va. ABERASTAIN III - DEL VALLE</option>' +
    ' <option value="478">Va. AEROPARQUE</option>' +
    '     <option value="479">Va. BARCELO</option>' +
    '     <option value="480">Va. BETTIO</option>' +
    '     <option value="481">Va. CONSTITUCION</option>' +
    '     <option value="482">Va. CREMADES</option>' +
    '     <option value="483">Va. DEL SOCORRO</option>' +
    ' <option value="484">Va. ELISA</option>' +
    '     <option value="485">Va. FUNES</option>' +
    '     <option value="486">Va. HUARPES - Ex MALAISI</option>' +
    ' <option value="487">Va. LAS MARGARITAS</option>' +
    ' <option value="488">Va. LIBERTAD</option>' +
    '     <option value="489">Va. LOS TILOS</option>' +
    ' <option value="490">Va. MERCEDES</option>' +
    '     <option value="491">Va. NACUSI</option>' +
    '     <option value="492">Va. PAOLINI o Va. BARBOZA</option>' +
    ' <option value="493">Va. SAN CAYETANO</option>' +
    ' <option value="494">Va. SAN CEFERINO</option>' +
    ' <option value="495">Va. SAN VICENTE</option>' +
    ' <option value="496">Va. SANTA MARGARITA</option>' +
    ' <option value="497">Va. UNIDA (Ex EL TREBOL)</option>' +
    ' <option value="498">Va. UNIDAS (Ex  BOTA)</option>' +
    ' <option value="499">Va. VALLECITO</option>' +
    '     <option value="500">Bo. VIÑAS DEL SUR</option>' +
    ' <option value="501">Bo, Mutual Universidad  Nacion</option>' +
    ' <option value="502">Bo. 11 DE NOVIEMBRE</option>' +
    ' <option value="503">Bo. 12 DE DICIEMBRE</option>' +
    ' <option value="504">Bo. 2 DE ABRIL (LOTE HOGAR Nro 2)</option>' +
    ' <option value="505">Bo. 23 DE MAYO (UDAP)</option>' +
    ' <option value="506">Bo. 24 DE NOVIEMBRE</option>' +
    ' <option value="507">Bo. 7 COLORES II</option>' +
    ' <option value="508">Bo. ALAMEDA</option>' +
    '     <option value="509">Bo. ALAMEDA II</option>' +
    ' <option value="510">Bo. AMECON</option>' +
    '     <option value="511">Bo. AMESPU</option>' +
    '     <option value="512">Bo. ANSILTA</option>' +
    '     <option value="513">Bo. ATLETICO</option>' +
    '     <option value="514">Bo. BELGRANO</option>' +
    '     <option value="515">Bo. BUBICA</option>' +
    '     <option value="516">Bo. CAPITAN LAZO</option>' +
    ' <option value="517">Bo. CARACOLES</option>' +
    '     <option value="518">Bo. CERAMISTAS I</option>' +
    ' <option value="519">Bo. CGT RAWSON - J. L. BORGES</option>' +
    ' <option value="520">Bo. CHACRAS DE CUYO</option>' +
    ' <option value="521">Bo. COLOSO - GAL. SAN MARTIN</option>' +
    ' <option value="522">Bo. COOP. ORO NEGRO</option>' +
    ' <option value="523">Bo. CRUZ DEL SUR (UPCN)</option>' +
    ' <option value="524">Bo. CUESTA DEL VIENTO</option>' +
    ' <option value="525">Bo. de Privado</option>' +
    ' <option value="526">Bo. del IPV</option>' +
    ' <option value="527">Bo. DON MATEO</option>' +
    ' <option value="528">Bo. DON ROSENDO</option>' +
    ' <option value="529">Bo. EDILCO</option>' +
    '     <option value="530">Bo. EJERCITO DE LOS ANDES</option>' +
    ' <option value="531">Bo. EL CARRASCAL</option>' +
    ' <option value="532">Bo. EL MOLLE</option>' +
    ' <option value="533">Bo. EL MOLLE II o PLATANOS</option>' +
    ' <option value="534">Bo. EMPRESA MAYO</option>' +
    ' <option value="537">Bo. EXCOMBATIENTES DE MALVINAS</option>' +
    ' <option value="538">Bo. FERROVIARIO</option>' +
    '     <option value="539">Bo. FODERAMI S.A.</option>' +
    ' <option value="540">Bo. FONTANA</option>' +
    ' <option value="541">Bo. FRANKLIN RAWSON</option>' +
    ' <option value="542">Bo. GATA DE GORGORA</option>' +
    ' <option value="543">Bo. HEROES DE MALVINAS</option>' +
    ' <option value="544">Bo. HUALILAN</option>' +
    '     <option value="545">Bo. HUALILAN SUR - MONTA-O</option>' +
    ' <option value="546">Bo. HUALILAN SUR II</option>' +
    ' <option value="547">Bo. JARDIN 2 DE AGOSTO</option>' +
    ' <option value="548">Bo. JORGE GUARDIA</option>' +
    ' <option value="549">Bo. JOSE MIGUEL ESCOBAR</option>' +
    ' <option value="550">Bo. JUANA MANZO</option>' +
    ' <option value="551">Bo. LA ESTACION NORTE</option>' +
    ' <option value="552">Bo. LA ESTACION SUR</option>' +
    ' <option value="553">Bo. LA QUEBRADA (IPV)</option>' +
    ' <option value="554">Bo. LAS PIRCAS</option>' +
    ' <option value="555">Bo. LIBERTAD</option>' +
    '     <option value="556">Bo. LICCIARDI Mendoza y Sivori</option>' +
    ' <option value="557">Bo. LOS HORNEROS</option>' +
    ' <option value="558">Bo. LOS MEDANOS</option>' +
    ' <option value="559">Bo. LUIS B. PLAZA</option>' +
    ' <option value="560">Bo. MALIMAN</option>' +
    '     <option value="561">Bo. MALVINAS ARGENTINAS</option>' +
    ' <option value="562">Bo. MARCO</option>' +
    '     <option value="563">Bo. MARTIN GUEMES</option>' +
    ' <option value="564">Bo. MEDALLA MILAGROSA RAWSON</option>' +
    ' <option value="565">Bo. MEDANO DE ORO (SUYAI)</option>' +
    ' <option value="566">Bo. MENDOZA</option>' +
    '     <option value="567">Bo. MERCEDARIO</option>' +
    '     <option value="568">Bo. MONSEÑOR ORZALI</option>' +
    ' <option value="569">Bo. NATANIA VII</option>' +
    ' <option value="570">Bo. NEUQUEN</option>' +
    '     <option value="571">Bo. OBRERO RAWSON</option>' +
    ' <option value="572">Bo. PADRE JUAN FANZOLATO</option>' +
    ' <option value="573">Bo. PARQUE PRESIDENCIAL</option>' +
    ' <option value="574">Bo. PARQUE SUR</option>' +
    ' <option value="575">Bo. PATAGONIA II o BUENA. LUNA</option>' +
    ' <option value="576">Bo. PRES. DOMINGO SARMIENTO</option>' +
    ' <option value="577">Bo. PROCESA SARMIENTO I</option>' +
    ' <option value="578">Bo. PROCESA SARMIENTO II</option>' +
    ' <option value="579">Bo. REINA MORA</option>' +
    ' <option value="580">Bo. RENE FAVALORO - (LOTE HOGAR Nro 16)</option>' +
    ' <option value="581">Bo. REPUBLICA DEL LIBANO</option>' +
    ' <option value="582">Bo. RESIDENCIAL DR. G. RAWSON</option>' +
    ' <option value="583">Bo. RIO BLANCO</option>' +
    ' <option value="584">Bo. SALVADOR M. DEL CARRIL</option>' +
    ' <option value="585">Bo. SAN CAYETANO</option>' +
    ' <option value="586">Bo. SAN GUILLERMO</option>' +
    ' <option value="587">Bo. SAN IGNACIO</option>' +
    ' <option value="588">Bo. SAN LUIS</option>' +
    ' <option value="589">Bo. SAN NICOLAS (LOTE HOGAR Nro 32)</option>' +
    ' <option value="590">Bo. SAN RICARDO</option>' +
    ' <option value="591">Bo. SIERRA MORADA</option>' +
    ' <option value="592">Bo. SIETE COLORES (SENDA-Priv)</option>' +
    ' <option value="593">Bo. SIETE COLORES I</option>' +
    ' <option value="594">Bo. SITRAVIAP</option>' +
    '     <option value="595">Bo. SOEVA - Bo. PABLO ROJAS</option>' +
    ' <option value="596">Bo. SRA. DEL R. DE SAN NICOLAS</option>' +
    ' <option value="597">Bo. SUREÑO</option>' +
    '     <option value="598">Bo. SUTIAGYF</option>' +
    '     <option value="599">Bo. TENIENTE SILVA (Ex Cañita)</option>' +
    ' <option value="600">Bo. TURF</option>' +
    '     <option value="601">Bo. UDAP IV</option>' +
    ' <option value="602">Bo. ULIARTE o LOS MANANTIALES</option>' +
    ' <option value="603">Bo. UTA</option>' +
    '     <option value="604">Bo. VIÑEDOS DEL SUR</option>' +
    ' <option value="605">Bo. VICTORINO ORTEGA</option>' +
    ' <option value="606">LOTE HOGAR Nro 18</option>' +
    ' <option value="607">LOTE HOGAR Nro 22</option>' +
    ' <option value="608">Bo. VICTORIA (LOTE HOGAR Nro 5)</option>' +
    ' <option value="609">Va. 12 DE OCTUBRE</option>' +
    ' <option value="610">Va. 17 DE AGOSTO</option>' +
    ' <option value="611">Va. ANGELICA</option>' +
    '     <option value="612">Va. ANTONIA</option>' +
    '     <option value="613">Va. ARCE</option>' +
    '     <option value="614">Va. AZOCAR</option>' +
    '     <option value="615">Va. BALLESTER</option>' +
    '     <option value="616">Va. BARON</option>' +
    '     <option value="617">Va. BOLAÑOS</option>' +
    '     <option value="618">Va. BURON ALONSO</option>' +
    ' <option value="619">Va. CALANDRA</option>' +
    '     <option value="620">Va. CENOBIA BUSTOS</option>' +
    ' <option value="621">Va. CHACARILLA</option>' +
    '     <option value="622">Va. CONGRESO- (ex ELISA)</option>' +
    ' <option value="623">Va. CRISTO POBRE</option>' +
    ' <option value="624">Va. DON PABLO</option>' +
    ' <option value="625">Va. ECHEGARAY</option>' +
    '     <option value="626">Va. EL SURGENTE</option>' +
    ' <option value="627">Va. ESTHER</option>' +
    '     <option value="628">Va. ESTORNELL</option>' +
    '     <option value="629">Va. FERLA</option>' +
    '     <option value="630">Va. FLEURY</option>' +
    '     <option value="631">Va. FLORESTA</option>' +
    '     <option value="632">Va. FRANCA</option>' +
    '     <option value="633">Va. FRANCISCO LAPRIDA</option>' +
    ' <option value="634">Va. GINER</option>' +
    '     <option value="635">Va. GRAL ACHA</option>' +
    ' <option value="636">Va. GUZMAN</option>' +
    '     <option value="637">Va. HIPODROMO</option>' +
    '     <option value="638">Va. ITALIA</option>' +
    '     <option value="639">Va. JOSE DOLORES</option>' +
    ' <option value="640">Va. LA SUPERIORA</option>' +
    ' <option value="641">Va. LAPLAGNE - Va. YORNET FUNE</option>' +
    ' <option value="642">Va. LAS MARGARITAS</option>' +
    ' <option value="643">Va. LAS ROSAS</option>' +
    ' <option value="644">Va. LERGA</option>' +
    '     <option value="645">Va. LIBERTADOR</option>' +
    '     <option value="646">Va. LLIBER</option>' +
    '     <option value="647">Va. LOS HUARPES</option>' +
    ' <option value="648">Va. LOS PARAISOS</option>' +
    ' <option value="649">Va. MARIA</option>' +
    '     <option value="650">Va. MASCARELL</option>' +
    '     <option value="651">Va. MAUREIRA</option>' +
    '     <option value="652">Va. MAURIN NAVARRO</option>' +
    ' <option value="653">Va. MIRARCHI o Va. TERESA</option>' +
    ' <option value="654">Va. NICOLAS AVELLANEDA</option>' +
    ' <option value="655">Va. NOVOA</option>' +
    '     <option value="656">Va. NUEVA ESPERANZA</option>' +
    ' <option value="657">Va. PALACIO</option>' +
    '     <option value="658">Va. PALACIOS BALAGUER</option>' +
    ' <option value="659">Va. PASTOR</option>' +
    '     <option value="660">Va. RACHEL</option>' +
    '     <option value="661">Va. RODANO</option>' +
    '     <option value="662">Va. RODRIGUEZ VILA</option>' +
    ' <option value="663">Va. ROJAS</option>' +
    '     <option value="664">Va. SA CAYETANO</option>' +
    ' <option value="665">Va. SAIZ</option>' +
    '     <option value="666">Va. SAN DAMIAN</option>' +
    ' <option value="667">Va. SAN MIGUEL</option>' +
    ' <option value="668">Va. SAN PEDRO</option>' +
    ' <option value="669">Va. SANTO DOMINGO</option>' +
    ' <option value="670">Va. SARMIENTO</option>' +
    '     <option value="671">Va. VALVERDE</option>' +
    '     <option value="672">VILLA KRAWSE</option>' +
    ' <option value="673">Bo. 1º DE FEBRERO</option>' +
    ' <option value="674">Bo. 20 DE NOVIEMBRE (UTA)</option>' +
    ' <option value="675">Bo. 22 DE ABRIL</option>' +
    ' <option value="676">Bo. 22 DE JUNIO - ORLANDO MARI</option>' +
    ' <option value="677">Bo. 23 DE OCTUBRE</option>' +
    ' <option value="678">Bo. AGUARIBAY</option>' +
    '     <option value="679">Bo. ALFEREZ CAMUS</option>' +
    ' <option value="680">Bo. ALTOS DE NATANIA</option>' +
    ' <option value="681">Bo. ARAMBURU</option>' +
    '     <option value="682">Bo. ARRAYANES II</option>' +
    ' <option value="683">Bo. ARTURO ILLIA</option>' +
    ' <option value="684">Bo. ATE API</option>' +
    ' <option value="685">Bo. ATSA</option>' +
    '     <option value="686">Bo. ATSA IV</option>' +
    ' <option value="687">Bo. AYRES DEL LIBERTADOR</option>' +
    ' <option value="688">Bo. BERNARDINO RIVADAVIA</option>' +
    ' <option value="689">Bo. BOULEVARES PUNTA DE RIELES</option>' +
    ' <option value="690">Bo. CAJA MEDICOS ODONTOLOGOS</option>' +
    ' <option value="691">Bo. CALIVAR</option>' +
    '     <option value="692">Bo. CAMPOS DE ABADIA</option>' +
    ' <option value="693">Bo. CASITAS VILLAGE</option>' +
    ' <option value="694">Bo. CENTINELA</option>' +
    '     <option value="695">Bo. CERRO BLANCO</option>' +
    ' <option value="696">Bo. CESAP</option>' +
    '     <option value="697">Bo. CGT RIVADAVIA</option>' +
    ' <option value="698">Bo. CGT RIVADAVIA VI</option>' +
    ' <option value="699">Bo. COOPERARQ</option>' +
    '     <option value="700">Bo. COOPERARQ IV</option>' +
    ' <option value="701">Bo. CORDOBA</option>' +
    '     <option value="702">Bo. CUYO</option>' +
    '     <option value="703">Bo. DE OFICIALES</option>' +
    ' <option value="704">Bo. DEL BONO GREEN</option>' +
    ' <option value="705">Bo. DOC. SANJUANINOS UDAP III</option>' +
    ' <option value="706">Bo. EL ARRIERO</option>' +
    ' <option value="707">Bo. EL CEIBO</option>' +
    ' <option value="708">Bo. EL CENTINELA</option>' +
    ' <option value="709">Bo. EL CONDOR</option>' +
    ' <option value="710">Bo. EL JILGUERO</option>' +
    ' <option value="711">Bo. ELENA FRONDIZZI  (LOTE HOGAR Nro 19)</option>' +
    ' <option value="713">Bo. ESTACION WILKINSON</option>' +
    ' <option value="714">Bo. FOEVA</option>' +
    '     <option value="715">Bo. FORO DE ABOGADOS</option>' +
    ' <option value="716">Bo. FORTABAT</option>' +
    '     <option value="717">Bo. GEMO II</option>' +
    ' <option value="718">Bo. GENDARMERIA</option>' +
    '     <option value="719">Bo. GRAN LIBERTADOR</option>' +
    ' <option value="720">Bo. HUAZIHUL</option>' +
    '     <option value="721">Bo. ITUZAINGO</option>' +
    '     <option value="722">Bo. JARDIN 2 DE AGOSTO</option>' +
    ' <option value="723">Bo. JARDIN DE LA BEBIDA</option>' +
    ' <option value="724">Bo. JARDIN POLICIAL</option>' +
    ' <option value="725">Bo. JOSE I. DE LA ROZA</option>' +
    ' <option value="726">Bo. LA BEBIDA</option>' +
    ' <option value="727">Bo. LA CAÑADA</option>' +
    ' <option value="728">Bo. LA CABANA</option>' +
    ' <option value="729">Bo. LA ESTANCIA</option>' +
    ' <option value="730">Bo. LA PLAZA</option>' +
    ' <option value="731">Bo. LAGUNAS</option>' +
    '     <option value="732">Bo. LIBERTAD III</option>' +
    ' <option value="733">Bo. LOS ARRAYANES I</option>' +
    ' <option value="734">Bo. LOS PENITENTES</option>' +
    ' <option value="735">Bo. LOS ZORZALES</option>' +
    ' <option value="736">Bo. MARQUESADO I</option>' +
    ' <option value="737">Bo. MARQUESADO II</option>' +
    ' <option value="738">Bo. MARQUESADO III</option>' +
    ' <option value="739">Bo. MEDALLA MILAGROSA</option>' +
    ' <option value="740">Bo. Medicos, Bioquimicos, Odontologos</option>' +
    ' <option value="741">Bo. MEGLIOLI</option>' +
    '     <option value="742">Bo. MUDAP</option>' +
    '     <option value="743">Bo. Mutual Vivienda SAN JUAN</option>' +
    ' <option value="744">Bo. NATANIA IV</option>' +
    ' <option value="745">Bo. NATANIA RESIDENCIAL II</option>' +
    ' <option value="746">Bo. NATANIA VI</option>' +
    ' <option value="747">Bo. NATANIA XV</option>' +
    ' <option value="748">Bo. NATANIA XVI</option>' +
    ' <option value="749">Bo. NATANIA XVII</option>' +
    ' <option value="750">Bo. NATANIA XVIII</option>' +
    ' <option value="751">Bo. OLIVARES DE NATANIA</option>' +
    ' <option value="752">Bo. PARQUE RIVADAVIA NORTE</option>' +
    ' <option value="753">Bo. PIUQUEN</option>' +
    '     <option value="754">Bo. PORTAL DE LOS ANDES</option>' +
    ' <option value="755">Bo. PROVINCIA DE LA RIOJA</option>' +
    ' <option value="756">Bo. PROVINCIA SAN JUAN</option>' +
    ' <option value="757">Bo. PUEBLO VIEJO</option>' +
    ' <option value="758">Bo. PUYUTA</option>' +
    '     <option value="759">Bo. RIVADAVIA II</option>' +
    ' <option value="760">Bo. RIVADAVIA SUR</option>' +
    ' <option value="761">Bo. ROCAS BLANCAS</option>' +
    ' <option value="762">Bo. SAN CARLOS</option>' +
    ' <option value="763">Bo. SAN MIGUEL</option>' +
    ' <option value="764">Bo. SAN RAUL</option>' +
    ' <option value="765">Bo. SAN ROBERTO</option>' +
    ' <option value="766">Bo. SARGENTO CABRAL</option>' +
    ' <option value="767">Bo. SINDICATO QUIMICOS</option>' +
    ' <option value="768">Bo. SOEVA (IPV)</option>' +
    '     <option value="769">Bo. SOLDADO ARGENTINO</option>' +
    ' <option value="770">Bo. STOTAC</option>' +
    '     <option value="771">Bo. TIERRAS DEL SOL</option>' +
    ' <option value="772">Bo. TURF</option>' +
    '     <option value="773">Bo. UDAP II</option>' +
    ' <option value="774">Bo. UNIVERSIDAD CATOLICA</option>' +
    ' <option value="775">Casa Facil</option>' +
    ' <option value="776">LOTE HOGAR Nro 20</option>' +
    ' <option value="777">LOTE HOGAR Nro 24</option>' +
    ' <option value="778">LOTE HOGAR Nro 25</option>' +
    ' <option value="779">LOTE HOGAR Nro 3</option>' +
    ' <option value="780">LOTE HOGAR Nro 30</option>' +
    ' <option value="781">LOTE HOGAR Nro 34</option>' +
    ' <option value="782">LOTE HOGAR Nro 41</option>' +
    ' <option value="783">LOTE HOGAR Nro 53</option>' +
    ' <option value="784">Va. ALMIRANTE BROWN</option>' +
    ' <option value="785">Va. ANDACOLLO</option>' +
    '     <option value="786">Va. CABILDO</option>' +
    '     <option value="787">Va. CAPDEVILLA</option>' +
    '     <option value="788">Va. CHACABUCO</option>' +
    '     <option value="789">Va. DEL BONO</option>' +
    ' <option value="790">Va. DEL CARMEN</option>' +
    ' <option value="791">Va. DONCEL</option>' +
    '     <option value="792">Va. ELENA</option>' +
    '     <option value="793">Va. FLORA</option>' +
    '     <option value="794">Va. GIULANI</option>' +
    '     <option value="795">Va. INES</option>' +
    '     <option value="796">Va. LAS DELICIAS</option>' +
    ' <option value="797">Va. LOPEZ MANSILLA</option>' +
    ' <option value="798">Va. LOS LIRIOS</option>' +
    ' <option value="799">Va. MIRTA</option>' +
    '     <option value="800">Va. NTRA. SRA. DE LOURDES</option>' +
    ' <option value="801">Va. PACHECO</option>' +
    '     <option value="802">Va. PEREZ HERNANDEZ</option>' +
    ' <option value="803">Va. POSLEMAN</option>' +
    ' <option value="804">Va. RODRIGUEZ PINTO</option>' +
    ' <option value="805">Va. SAN FRANCISCO</option>' +
    ' <option value="806">Va. SAN JOSE</option>' +
    ' <option value="807">Va. SAN JUAN</option>' +
    ' <option value="808">Va. SAN NICOLAS</option>' +
    ' <option value="809">Va. SAN ROQUE</option>' +
    ' <option value="810">Va. SANTA AMALIA</option>' +
    ' <option value="811">Va. SANTA ANITA</option>' +
    ' <option value="812">Va. SANTA ROSA</option>' +
    ' <option value="813">Va. SEMINARIO</option>' +
    '     <option value="814">Va. SORIANO BUSTOS</option>' +
    ' <option value="815">Va. YORNET</option>' +
    '     <option value="816">Bo. BELLA VISTA</option>' +
    ' <option value="817">Bo. DOS ACEQUIAS</option>' +
    ' <option value="818">Bo. en Prop Ind Municipio</option>' +
    ' <option value="820">Bo. INDEPENDENCIA</option>' +
    '     <option value="821">Bo. MARIA AUXILIADORA</option>' +
    ' <option value="822">Bo. PIE DE PALO</option>' +
    ' <option value="823">Bo. PROVINCIA DE ENTRE RIOS</option>' +
    ' <option value="824">Bo. SADOP</option>' +
    '     <option value="825">Bo. SAN ISIDRO LABRADOR</option>' +
    ' <option value="826">Va. ELORZA</option>' +
    '     <option value="827">Va. LUGANO</option>' +
    '     <option value="828">Bo LA LUCIA</option>' +
    ' <option value="830">Bo. 20 DE JUNIO</option>' +
    ' <option value="831">Bo. 30 DE OCTUBRE</option>' +
    ' <option value="832">Bo. ALTOS DE SANTA LUCIA</option>' +
    ' <option value="833">Bo. ANGEL DE ROJAS</option>' +
    ' <option value="834">Bo. ASOCIACION 9 DE JULIO</option>' +
    ' <option value="835">Bo. AYRES DEL ESTE o Lote RINS</option>' +
    ' <option value="836">Bo. BALCARCE</option>' +
    '     <option value="837">Bo. BERMEJITO</option>' +
    '     <option value="838">Bo. C. EMPLEADO DE COMERCI</option>' +
    ' <option value="839">Bo. CADETES ARGENTINOS</option>' +
    ' <option value="840">Bo. CAMILO ROJO</option>' +
    ' <option value="841">Bo. CAMPO LA ROSA II</option>' +
    ' <option value="842">Bo. CAMPODONICO</option>' +
    '     <option value="843">Bo. CAROLINA III</option>' +
    ' <option value="844">Bo. COLON</option>' +
    '     <option value="845">Bo. CONSTITUCION</option>' +
    '     <option value="846">Bo. DON PEDRO</option>' +
    ' <option value="847">Bo. EDUARDO</option>' +
    '     <option value="848">Bo. EL SAUCE</option>' +
    ' <option value="849">Bo. EL TRIBAL</option>' +
    ' <option value="850">Bo. EL VIVERO</option>' +
    ' <option value="852">Bo. ENOE BRAVO</option>' +
    ' <option value="853">Bo. GENDARMERIA</option>' +
    '     <option value="854">Bo. ITATI</option>' +
    '     <option value="855">Bo. J. B. ALBERDI</option>' +
    '     <option value="856">Bo. J. M. CORTEZ</option>' +
    '     <option value="857">Bo. JANA</option>' +
    '     <option value="858">Bo. JARDIN DEL MILAGRO</option>' +
    ' <option value="859">Bo. KENNEDY</option>' +
    '     <option value="860">Bo. KENNEDY (Amplaci=n)</option>' +
    '     <option value="861">Bo. LA QUERENCIA</option>' +
    ' <option value="862">Bo. LAPRIDA</option>' +
    '     <option value="863">Bo. LAS HIGUERAS</option>' +
    ' <option value="864">Bo. LAS MORERAS</option>' +
    ' <option value="865">Bo. LAS MORERAS (Amp.)</option>' +
    ' <option value="866">Bo. LAS TIERRITAS</option>' +
    ' <option value="867">Bo. LAS VIÑAS</option>' +
    ' <option value="868">Bo. LIBERTADOR IV</option>' +
    ' <option value="869">Bo. LOS OLIVOS</option>' +
    ' <option value="870">Bo. LOS SOLARES</option>' +
    ' <option value="871">Bo. LOS TRONCOS</option>' +
    ' <option value="872">Bo. LOS TROPEROS</option>' +
    ' <option value="873">Bo. MEDALLA MILAGROSA (LOTE HOGAR Nro 36)</option>' +
    ' <option value="874">Bo. MUNICIPAL SANTA LUCIA</option>' +
    ' <option value="875">Bo. NATANIA XXIV</option>' +
    ' <option value="876">Bo. NICOLAS AVELLANEDA</option>' +
    ' <option value="877">Bo. NORESTE III</option>' +
    ' <option value="878">Bo. o Va. SAN LORENZO</option>' +
    ' <option value="879">Bo. PALMERA</option>' +
    '     <option value="880">Bo. PARQUE ACONCAGUA</option>' +
    ' <option value="881">Bo. PERIODISTAS SANJUANINO</option>' +
    ' <option value="882">Bo. PORTAL CUYANO</option>' +
    ' <option value="883">Bo. PORTICO ALTO DE SIERRA</option>' +
    ' <option value="884">Bo. QUINTAS DEL LIBERTADOR</option>' +
    ' <option value="885">Bo. RES. J. I. DE LA ROZA</option>' +
    ' <option value="886">Bo. RETIRO</option>' +
    '     <option value="887">Bo. ROQUE SAENZ PEÑA</option>' +
    ' <option value="888">Bo. ROTONDA SARMIENTO</option>' +
    ' <option value="889">Bo. RURAL I</option>' +
    ' <option value="890">Bo. RURAL II</option>' +
    ' <option value="891">Bo. SAN JAVIER</option>' +
    ' <option value="892">Bo. SAN JULIAN</option>' +
    ' <option value="893">Bo. SANTA CLARA</option>' +
    ' <option value="894">Bo. SANTA LUCIA - (LOTE HOGAR Nro 26)</option>' +
    ' <option value="895">Bo. SANTO TOMAS</option>' +
    ' <option value="896">Bo. SOCIEDAD CIVIL CEDRO AZUL</option>' +
    ' <option value="897">Bo. SOLARES DE DON JOSE MARIA</option>' +
    ' <option value="898">Bo. TIERRA DE ARENA</option>' +
    ' <option value="899">Bo. TIERRA DEL FUEGO</option>' +
    ' <option value="900">Bo. TOMAS EDISON</option>' +
    ' <option value="901">Bo. UDAP I</option>' +
    ' <option value="902">Bo. VALLE PINTADO</option>' +
    ' <option value="903">Bo. VILDO III</option>' +
    ' <option value="904">Va. 12 DE OCTUBRE</option>' +
    ' <option value="905">Va. ABERASTAIN</option>' +
    '     <option value="906">Va. ALBA</option>' +
    '     <option value="907">Va. BALCARCE</option>' +
    '     <option value="908">Va. BELGRANO</option>' +
    '     <option value="909">Va. CASTRO GUZMAN de AGURADO</option>' +
    ' <option value="910">Va. CENTRO</option>' +
    '     <option value="911">Va. DEL PARQUE</option>' +
    ' <option value="912">Va. DON ARTURO</option>' +
    ' <option value="913">Va. FERRER YANZI</option>' +
    ' <option value="914">Va. FORD o Bo. INDEPENDENCIA</option>' +
    ' <option value="915">Va. JOFRE</option>' +
    '     <option value="916">Va. LARRAIN</option>' +
    '     <option value="917">Va. LIBERTADOR</option>' +
    '     <option value="918">Va. LUNA</option>' +
    '     <option value="919">Va. LUZ DEL MUNDO</option>' +
    ' <option value="920">Va. MANUELITA</option>' +
    '     <option value="921">Va. MANZINI</option>' +
    '     <option value="922">Va. MARIA</option>' +
    '     <option value="923">Va. MARINI</option>' +
    '     <option value="924">Va. MUÑOZ</option>' +
    '     <option value="925">Va. PATRICIAS SANJUANINAS</option>' +
    ' <option value="926">Va. PUEYRREDON</option>' +
    '     <option value="927">Va. RIZZO</option>' +
    '     <option value="928">Va. SAN FRANCISCO</option>' +
    ' <option value="929">Va. SAN JUDAS TADEO</option>' +
    ' <option value="930">Va. SAN PABLO</option>' +
    ' <option value="931">Va. SANTO TOMAS</option>' +
    ' <option value="932">Va. SARGENTO CABRAL</option>' +
    ' <option value="933">Va. URQUIZA</option>' +
    '     <option value="934">Bo. BENAVIDEZ</option>' +
    '     <option value="935">Bo. CELESTE Y BLANCO</option>' +
    ' <option value="936">Bo. CIENAGUITA</option>' +
    '     <option value="937">Bo. COCHAGUAL</option>' +
    '     <option value="938">Bo. COLONIA FISCAL SUR</option>' +
    ' <option value="939">Bo. COVISAR - SAN ANTONIO</option>' +
    ' <option value="940">Bo. DEL CARMEN</option>' +
    ' <option value="942">Bo. FERROVIARIO</option>' +
    '     <option value="943">Bo. JARDIN RIVIELLO</option>' +
    ' <option value="944">Bo. LAGUNA DEL ROSARIO</option>' +
    ' <option value="945">Bo. LAS LAGUNAS</option>' +
    ' <option value="946">Bo. LOS BERRROS</option>' +
    ' <option value="947">Bo. MEDIA AGUA o NORTE</option>' +
    ' <option value="948">Bo. PATAGONIA I</option>' +
    ' <option value="949">Bo. PATAGONIA II</option>' +
    ' <option value="950">Bo. PATIÑO</option>' +
    '     <option value="951">Bo. PEDRO MOYANO</option>' +
    ' <option value="952">Bo. POTRERO DEL ALTO</option>' +
    ' <option value="953">Bo. PUNTA DEL MEDANO</option>' +
    ' <option value="954">Bo. TRES ESQUINAS</option>' +
    ' <option value="955">Bo. VILLA MEDIA AGUA I</option>' +
    ' <option value="956">Bo. VILLA MEDIA AGUA II</option>' +
    ' <option value="957">Va. GUELL</option>' +
    '     <option value="958">Bo. AGAPITO FLOR</option>' +
    ' <option value="959">Bo. DE AGUAYE</option>' +
    ' <option value="960">Bo. DIQUE DE ULLUM I</option>' +
    ' <option value="961">Bo. DIQUE DE ULLUM II</option>' +
    ' <option value="962">Bo. FREDES</option>' +
    '     <option value="963">Bo. HIGUERITAS I</option>' +
    ' <option value="964">Bo. HIGUERITAS II</option>' +
    ' <option value="965">Bo. LAGO DE ULLUM</option>' +
    ' <option value="966">Bo. MARGARITA FERRO DE BARTO</option>' +
    ' <option value="967">Bo. ULLUM CONJUNTO II - IPV</option>' +
    ' <option value="968">Bo. ULLUM II</option>' +
    ' <option value="969">Va. AURORA</option>' +
    '     <option value="970">Va. EL LAGO</option>' +
    ' <option value="971">Va. SANTA ROSA</option>' +
    ' <option value="972">Bo. BALDES DE LAS CHILCAS</option>' +
    ' <option value="973">Bo. del IPV</option>' +
    ' <option value="974">Bo. LA ISLA</option>' +
    ' <option value="975">Bo. LAS TUMANAS</option>' +
    ' <option value="976">Bo. SAN AGUSTIN</option>' +
    ' <option value="977">Bo. USNO</option>' +
    '     <option value="978">LOTE HOGAR Nro 52</option>' +
    ' <option value="979">Bo. ALTO VALLE</option>' +
    ' <option value="980">Bo. ALTOS DE ZONDA I</option>' +
    ' <option value="981">Bo. ALTOS DE ZONDA II</option>' +
    ' <option value="982">Bo. BASILIO NIEVAS</option>' +
    ' <option value="983">Bo. EL PORTAL DE LA MONTAÑA</option>' +
    ' <option value="985">Bo. LAS TOTORAS</option>' +
    ' <option value="986">Bo. OBRERO MUNICIPAL</option>' +
    ' <option value="987">Bo. RICARDO COLOMBO</option>' +
    ' <option value="988">Bo. SERRANIAS</option>' +
    '     <option value="989">Bo. SIERRAS AZULES I</option>' +
    ' <option value="990">Bo. SIERRAS AZULES II</option>' +
    ' <option value="991">Bo. TONTAL</option>' +
    '     <option value="992">VILLA TACU</option>' +
    ' <option value="1013">LOTE HOGAR Nro 55</option>' +
    ' <option value="1014">Va. LA ESPERANZA</option>' +
    ' <option value="1015">Bo. CONJUNTO I</option>' +
    ' <option value="1016">Va. MAXIMILIANO</option>' +
    '     <option value="1017">Va. LOTE HOGAR 56</option>' +
    ' <option value="1018">Bo. LUIS ECHEVARRIA</option>' +
    ' <option value="1019">Bo. Fronteras Argentinas</option>' +
    ' <option value="1020">Bo. FERES</option>' +
    '     <option value="1021">Bo. AGAPITO GIL</option>' +
    ' <option value="1022">LOTEO MUNICIPAL</option>' +
    ' <option value="1023">Bo. AGUA Y ENERGIA Y COSTA CANAL</option>' +
    ' <option value="1024">Bo. ASENTAMIENTO MUNICIPAL</option>' +
    ' <option value="1025">Bo. ALTO VERDE</option>' +
    ' <option value="1026">Bo. Colon</option>' +
    '     <option value="1027">BICENTENARIO</option>' +
    '     <option value="1028">Bo. SAN EXPEDITO</option>' +
    ' <option value="1029">Bo. FRANCISCO CESPEDES</option>' +
    ' <option value="1030">Bo. CONJUNTO III</option>' +
    ' <option value="1031">Va. MARCO</option>' +
    '     <option value="1032">ASENTAMIENTO 25 DE MAYO</option>' +
    ' <option value="1033">FCA. VALLE DEL MANANTIAL</option>' +
    ' <option value="1034">Bo. MURATORE</option>' +
    '     <option value="1035">EL CARRIZAL</option>' +
    ' <option value="1036">SANTA RITA</option>' +
    ' <option value="1038">Bo. COMPLEJO 4</option>' +
    ' <option value="1039">Va. VARELA</option>' +
    '     <option value="1040">Bo. EL CENTRO</option>' +
    ' <option value="1041">Bo. LA COLONIA</option>' +
    ' <option value="1042">Bo. Elias Amado</option>' +
    ' <option value="1043">Camping Municipal</option>' +
    ' <option value="1044">Barrio Pismanta  IV</option>' +
    ' <option value="1045">Barrio Orion</option>' +
    ' <option value="1046">Barrio Aberstain</option>' +
    ' <option value="1047">Barrio San Jose  II</option>' +
    ' <option value="1048">Barrio Cauquenes  V</option>' +
    ' <option value="1049">Barrio Bicentenario</option>' +
    ' <option value="1050">Bo. Presidente Perón</option>' +
    ' <option value="1051">Bo. Alto Huaco</option>' +
    ' <option value="1052">Bo. Conjunto 4</option>' +
    ' <option value="1053">Bo. La Cienaga</option>' +
    ' <option value="1054">Bo. Pismanta I</option>' +
    ' <option value="1055">Bo. Huaco</option>' +
    '     <option value="1056">Bo. Tamberias</option>' +
    '     <option value="1057">Bo. Conjunto I</option>' +
    ' <option value="1058">Bo. Cuadro la Estancia</option>' +
    ' <option value="1059">Bo. Cic</option>' +
    '     <option value="1060">Bo. CONJUNTO 2</option>' +
    ' <option value="1061">Bo. PISMANTA 2</option>' +
    ' <option value="1062">Bo. MUNICIPAL EVITA 1</option>' +
    ' <option value="1063">Cerro Colorado</option>' +
    ' <option value="1064">Mattas Ristol</option>' +
    ' <option value="1065">Bo. TIMOTEO MARADONA</option>' +
    ' <option value="1066">Va. Jardin</option>' +
    '     <option value="1067">Bo. El Volcan</option>' +
    ' <option value="1068">Bo. PAMPA VIEJA</option>' +
    ' <option value="1070">Bo. LA FALDA</option>' +
    ' <option value="1072">Bo. EL ALANITO</option>' +
    ' <option value="1073">Bo. ZOE BUSTOS</option>' +
    ' <option value="1074">Bo. SAN EXPEDITO</option>' +
    ' <option value="1075">CONJUNTO IV</option>' +
    ' <option value="1076">Va. HIDRAULICA</option>' +
    '     <option value="1077">Va. DARBOVEN</option>' +
    '     <option value="1078">Bo. CONJUNTO II</option>' +
    ' <option value="1079">SAN MARTIN</option>' +
    ' <option value="1080">Bo. BUENA VENTURA LUNA</option>' +
    ' <option value="1081">Bo. MUNICIPAL EVITA 2</option>' +
    ' <option value="1082">Bo. MUNICIPAL EVITA 3</option>' +
    ' <option value="1083">Bo. MUNICIPAL EVITA 4</option>' +
    ' <option value="1084">Bo. MUNICIPAL EVITA 5</option>' +
    ' <option value="1085">Va. MERCEDES</option>' +
    '     <option value="1086">Bo. OLIVARES</option>' +
    '     <option value="1087">Bo. EL PROGRESO</option>' +
    ' <option value="1088">Bo. BILBAO II</option>' +
    ' <option value="1089">Bo. FLORENTINO AMEGUINO</option>' +
    ' <option value="1090">Bo. LIBERTADOR</option>' +
    '     <option value="1091">Bo.  LOS MEDANOS</option>' +
    ' <option value="1092">Bo. MORMON</option>' +
    '     <option value="1093">Bo. CONJUNTO IV</option>' +
    ' <option value="1094">Bo. COSTA CANAL</option>' +
    ' <option value="1095">B° CONJUNTO II</option>' +
    ' <option value="1096">B° ALBARDON</option>' +
    ' <option value="1097">B° CONJUNTO I</option>' +
    ' <option value="1098">B° BANDERA ARGENTINA</option>' +
    ' <option value="1099">LOTEO SALTA</option>' ;


$(function(){


    $.ajax({
        //url: 'planillas/Obtenerotivos',
        url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/obtenerMotivos",
        type: 'GET',
        dataType: 'json',
        success: function(data){
            motivos = data;
            //console.dir(data)
        },
        error: function(e){
            ERROR();
            console.log(e);
        }
    });


    $.ajax({
        //url: 'planillas/getTipoPension',
        url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/obtenerTipoPensiones",
        type: 'GET',
        dataType: 'json',
        success: function(data){
            tipoPension = data;
            //console.dir(data)
        },
        error: function(e){
            ERROR();
            console.log(e);
        }
    });

    $.ajax({
        //url: '/planillas/getTipoVivienda',
        url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/obtenerTipoViviendas",
        type: 'GET',
        dataType: 'json',
        success: function(data){
            tipoVivienda = data;
        },
        error: function(e){
            ERROR();
            console.log(e);
        }
    });

    $.ajax({
        //url: '/planillas/getTipoServicios',
        url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/ObtenerTipoServicios",
        type: 'GET',
        dataType: 'json',
        success: function(data){
            tipoServicios = data;
        },
        error: function(e){
            ERROR();
            console.log(e);
        }
    });

    /* //acá debería haber una llamada ajax para traer los barrios
    $.ajax({
        //url: '/planillas/getTipoServicios',
        url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/OBTENERBARRIOS",
        type: 'GET',
        dataType: 'json',
        success: function(data){
            tipoServicios = data;
        },
        error: function(e){
            ERROR();
            console.log(e);
        }
    });
    */



    $("#agregarPlanilla").click(function(){

        agregarEncabezado(userid);
    });

    $("#agregarEncuesta").click(function(){

        agregarEncuesta();
    });

});

var marker;


function ERROR(){

    alert("Hubo un error, por favor recargue la página");
}


function fillModal(NumeroPlanilla,idplanilla,filaid){


    filaplanillaid = idplanilla;

    if( typeof(filaid) !== 'undefined' ){
        filaID = filaid;
    }else{

        filaID = '';
    }



    planillaid = idplanilla;

    //tabs
    var htmlString =
        '<ul class="nav nav-tabs nav-fill" role="tablist" id="formTabs">'+
        '   <li class="nav-item">' +
        '       <a id="personales-tab" data-toggle="tab" class="nav-link active " href="#personales">Datos personales <i class="alerta personales fa fa-exclamation-triangle text-warning"></i> </a>' +
        '   </li>'+
        '   <li class="nav-item vivo">' +
        '       <a id="localizacion-tab" data-toggle="tab" class="nav-link " href="#localizacion">Datos de localización <i class="alerta localizacion fa fa-exclamation-triangle text-warning"></i> </a>' +
        '   </li>'+
        '   <li class="nav-item vivo">' +
        '       <a id="prestaciones-tab" data-toggle="tab" class="nav-link " href="#prestaciones">Datos de la prestación <i class="alerta prestacion fa fa-exclamation-triangle text-warning"></i> </a>' +
        '   </li>'+
        '   <li class="nav-item vivo">' +
        '       <a id="vivienda-tab" data-toggle="tab" class="nav-link " href="#vivienda">Datos de vivienda <i class="alerta vivienda fa fa-exclamation-triangle text-warning"></i> </a>' +
        '   </li>'+
        '   <li class="nav-item vivo">' +
        '       <a id="comentarios-tab" data-toggle="tab" class="nav-link " href="#comentarios">Comentarios </a>' +
        '   </li>'+
        '</ul>';

    //tabs content
    htmlString +=
        '<div class="tab-content" id="tabContent">'+
        '   <div class="tab-pane fade show active" id="personales" role="tabpanel" aria-labelledby="personales-tab"></div>'+
        '   <div class="tab-pane fade" id="localizacion" role="tabpanel" aria-labelledby="localizacion-tab"></div>'+
        '   <div class="tab-pane fade" id="prestaciones" role="tabpanel" aria-labelledby="prestaciones-tab"></div>'+
        '   <div class="tab-pane fade" id="vivienda" role="tabpanel" aria-labelledby="vivienda-tab"></div>'+
        '   <div class="tab-pane fade" id="comentarios" role="tabpanel" aria-labelledby="comentarios-tab"></div>'+
        '</div>';


    //agrega el esqueleto al modal
    $("#modalACBody")
        .empty()
        .append(htmlString);

    //esconde las alertas
    $(".alerta").hide();

    //pestaña de datos personales
    var htmlPersonales =
        '<table class="table table-striped">' +
        '   <thead>'+
        '       <tr class="tr-importante">' +
        '           <td class="bg-light" id="td-motivoPersonal">' +
        '               <div class="custom-control custom-checkbox">'+
        '                   <input type="checkbox" data-mot="1" id="mot-1" class="custom-control-input che">'+
        '                   <label class="custom-control-label" for="mot-1">Datos incompletos</label>'+
        '               </div>'+
        '           </td>' +
        '           <td  class="bg-light">' +
        '                <select class="form-control" id="sel-1">'+
        '               </select>'+
        '           </td>' +
        '       </tr>' +
        '   </thead>' +
        '   <tbody id="cam-1">' +
        '     <tr>'+
        '         <td>' +
        '              <label for="nombre">Nombre</label>' +
        '              <input maxlength="50" id="nombre" name="nombre" type="text" class="form-control" placeholder="Nombre">' +
        '          </td>'+
        '          <td>' +
        '              <label for="apellido">Apellido</label>' +
        '              <input maxlength="50" id="apellido" name="apellido" type="text" class="form-control" placeholder="Apellido">' +
        '          </td>'+
        '     </tr>'+
        '     <tr  class="vivo">'+
        '         <td>' +
        '              <label for="fecnac">Fecha de nacimiento</label>' +
        '              <input id="fechaNacimiento" name="fecnac" class="inputtipobootstrap" placeholder="Elija fecha" data-provide="datepicker">' +
        '              <label for="sexo">Sexo</label>' +
        '              <select class="form-control" id="sexo" name="sexo">' +
        '                  <option value="3">Seleccione el sexo...</option>' +
        '                  <option value="1">Masculino</option>' +
        '                  <option value="2">Femenino</option>' +
        '              </select>' +
        '          </td>'+
        '         <td>' +
        '              <label for="dni">DNI</label>' +
        '              <input maxlength="8" id="dni" name="dni" type="number" class="form-control" placeholder="DNI">' +
        '          </td>'+
        '     </tr>'+
        '     <tr>'+
        '         <td  class="vivo">' +
        '              <label for="tel">Teléfono</label>' +
        '              <input id="tel" name="tel" type="text" class="form-control" placeholder="Teléfono">' +
        '          </td>'+
        '          <td id="fechaDefuncion">' +
        '              <label for="defuncion">Fecha de defunción</label>' +
        '              <input maxlength="10" id="defuncion" name="defuncion" class="inputtipobootstrap" placeholder="Elija fecha de fallecimiento" data-provide="datepicker">' +
        '          </td>'+
        '         <td>' +
        '              <label for="vivo">Vivo</label>' +
        '             <input name="vivo" id="fallecido" type="checkbox" checked data-toggle="toggle">' +
        '         </td>' +
        '     </tr>' +
        '   </tbody>'+
        '</table>';

    $("#personales")
        .append(htmlPersonales);

    $("#fechaDefuncion").hide();



    //pestaña de datos de localización
    var htmlLocalizacion =
        '<table class="table table-striped">'+
        '   <thead>'+
        '    <tr class="tr-importante">' +
        '        <td colspan="2" class="bg-light" id="td-motivoLocalizacion">' +
        '            <div class="custom-control custom-checkbox">'+
        '                <input type="checkbox" data-mot="2" id="mot-2" class="custom-control-input che che-1" >'+
        '                <label class="custom-control-label" for="mot-2">Datos incompletos</label>'+
        '            </div>'+
        '        </td>' +
        '           <td colspan="2" class="bg-light">' +
        '                <select class="form-control" id="sel-2">'+
        '               </select>'+
        '           </td>' +
        '    </tr>'+
        '   </thead>'+
        '   <tbody id="cam-2">' +
        '   <tr>'+
        '       <td>' +
        '           <label for="Departamento">Departamento</label>' +
        '           <select name="departamento" class="selectDepartamento"></select>' +
        '       </td>'+
        '       <td>' +
        '           <label for="localidad">Localidad</label>' +
        '           <select name="localidad" class="selectLocalidad"></select>' +
        '       </td>'+
        '       <td>' +
        '           <label for="domicilio">Calle, orientación y altura o referencia</label>' +
        '           <input maxlength="50" id="domicilio" name="domicilio" type="text" class="form-control" placeholder="Domicilio">' +
        '       </td>'+
        '       <td>' +
        '           <label for="barrio">Barrio</label>' +
        //'           <input maxlength="150" id="barrio" name="barrio" type="text" class="form-control" placeholder="Barrio">' +
        '               <select class="selectBarrio" name="barrio">' +
                            barrio +
         '              </select>' +
        '       </td>'+
        '   </tr>'+
        '   <tr>'+
        '       <td>' +
        '           <div class="input-group input-group">'+
        '               <div class="input-group-prepend">'+
        '                   <span class="input-group-text" id="latitud">Latitud</span>'+
        '               </div>'+
        '               <input maxlength="20" name="lat" id="lat" type="text" class="form-control" aria-describedby="latitud" placeholder="latitud">'+
        '           </div>'+
        '       </td>' +
        '       <td>' +
        '           <div class="input-group input-group">'+
        '               <div class="input-group-prepend">'+
        '                   <span class="input-group-text" id="longitud">Longitud</span>'+
        '               </div>'+
        '               <input maxlength="20" name="lon" id="lon" type="text" class="form-control" aria-describedby="longitud" placeholder="longitud">'+
        '           </div>'+
        '       </td>' +
        '   </tr>'+
        '   <tr>'+
        '       <td colspan="4" >' +
        '           <div style="padding:10px">'+
        '           <label for="map">Mapa interactivo</label>' +
        '               <div id="map"></div>'+
        '           </div>'+
        '       </td>'+
        '   </tr>'+
        '</tbody>'+
        '</table>';

    $("#localizacion")
        .append(htmlLocalizacion);

    initMap();

    //pestaña de datos de la prestación
    var htmlPrestaciones =
        '<table class="table table-striped">'+
        '<thead>'+
        '    <tr class="tr-importante">' +
        '        <td  class="bg-light" id="td-motivoPrestaciones">' +
        '            <div class="custom-control custom-checkbox">'+
        '                <input type="checkbox" class="custom-control-input che" data-mot="3" id="mot-3">'+
        '                <label class="custom-control-label" for="mot-3">Datos incompletos</label>'+
        '            </div>'+
        '        </td>' +
        '        <td colspan="2" class="bg-light">' +
        '                <select class="form-control" id="sel-3">'+
        '               </select>'+
        '           </td>' +
        '    </tr>'+
        '</thead>'+
        '   <tbody id="cam-3">' +
        '   <tr>'+
        '       <td >' +
        '           <label for="titular">Titularidad</label>' +
        '           <div id="titular" class="btn-group btn-group-toggle" data-toggle="buttons">'+
        '               <label class="btn btn-light">'+
        '                   <input id="btnTitular" type="radio" name="options" autocomplete="off"> Titular'+
        '               </label>'+
        '               <label class="btn btn-light">'+
        '                   <input id="btnAdherente" type="radio" name="options" autocomplete="off"> Adherente'+
        '               </label>'+
        '           </div>' +
        '       </td>'+

        '       <td >' +
        '              <label for="ingresosDeclarados">Ingresos declarados</label>' +
        '              <input maxlength="19" id="ingresosDeclarados" name="ingresosDeclarados" type="text" class="form-control" placeholder="Ingresos declarados">' +
        '       </td>'+
        '   </tr>'+

        '   <tr>'+
        '       <td>' +
        '           <label for="pension">Tipo de pensión</label>' +
        '           <select name="pension" class="selectTipoPension"></select>' +
        '       </td>'+
        '       <td>' +
        '           <label for="motivo">Diagnóstico (CIE10)</label>' +
        '           <select name="motivo" class="selectCIE10">' +
        '</select>' +
        '       </td>'+
        '   </tr>'+
        '   <tr>'+
        '       <td colspan="2">' +
        '           <label for="prestaciones">Prestaciones</label>' +
        '           <select name="prestaciones" class="selectPrestaciones">' +
        '       </td>'+
        '   </tr>'+
        '</tbody>'+
        '</table>';

    $("#prestaciones")
        .append(htmlPrestaciones);


    //pestaña de vivienda
    var htmlVivienda =
        '<table class="table table-striped">'+
            '<thead>' +
            '<tr class="tr-importante">'+
                '<td  class="bg-light" colspan="2" id="td-motivoVivienda">' +
                    '<div class="custom-control custom-checkbox">'+
                        '<input type="checkbox" class="custom-control-input che" data-mot="4" id="mot-4">'+
                        '<label class="custom-control-label" for="mot-4">Datos incompletos</label>'+
                    '</div>'+
                '</td>' +
        '        <td colspan="2" class="bg-light">' +
        '                <select class="form-control" id="sel-4">'+
        '               </select>'+
        '           </td>' +
            '</tr>'+
        '</thead>'+
        '   <tbody id="cam-4">' +
        '   <tr>'+
        '       <td>' +
        '           <label for="conviven">Nº de personas que conviven</label>' +
        '           <input id="conviven" name="conviven" type="number" class="form-control" placeholder="Nº conviven">' +
        '       </td>'+
        '       <td>' +
        '           <label for="grupo">Nº del grupo familiar</label>' +
        '           <input id="grupo" name="grupo" type="number" class="form-control" placeholder="Nº G Familiar">' +
        '       </td>'+
        '       <td>' +
        '           <label for="vivienda">Tipo de vivienda</label>' +
        '           <select name="vivienda" class="selectTipoVivienda">' +
        '           <input maxlength="100" id="comentarioTipoVivienda" class="form-control" type="text" placeholder="Especifique" >' +
        '       </td>'+
        '   </tr>'+
        '   <tr>'+
        '       <td colspan="3">' +
        '           <label for="servicios">Servicios básicos</label>' +
        '           <select name="servicios" class="selectTipoServicios">' +
        '       </td>'+
        '   </tr>'+
        '   <tr>'+
        '   </tr>'+
        '</tbody>'+
        '</table>';


       $("#vivienda")
        .append(htmlVivienda);


    $("#sel-1").hide();
    $("#sel-2").hide();
    $("#sel-3").hide();
    $("#sel-4").hide();

    $.each(motivos, function(key, value) {

        $('#sel-1')
            .append($("<option></option>")
                .attr("value",value.id)
                .text(value.text));

        $('#sel-2')
            .append($("<option></option>")
                .attr("value",value.id)
                .text(value.text));

        $('#sel-3')
            .append($("<option></option>")
                .attr("value",value.id)
                .text(value.text));

        $('#sel-4')
            .append($("<option></option>")
                .attr("value",value.id)
                .text(value.text));
    });

    $("#fallecido").bootstrapToggle({
        on: "Vivo",
        off: "Fallecido",
        onstyle: 'success',
        offstyle: 'danger',
        width: '100%'
    });

    $(".che").change(function(){


        if($(this).prop('checked') == true){

            //console.log('ni fu')

            $("#sel-"+$(this).data('mot')).show();
            //$("#cam-"+$(this).data('mot')).hide();

        }else{
            //console.log('ni fa')

            $("#sel-"+$(this).data('mot')).hide();
            //$("#cam-"+$(this).data('mot')).show()
        }




    });


    //evento del botón fallecido
    $("#fallecido").change(function(){


        if($(this).prop('checked')){
            $(".vivo:hidden").show();
            $("#fechaDefuncion").hide();

        }else{

            $(".vivo:visible").hide();
            $("#fechaDefuncion").show();
        }



    });

    //pestaña de comentarios
    var htmlComentarios =
        '<table class="table table-striped">'+
        '   </tr>'+
        '       <td>' +
        '           <label for="comentario">Comentarios</label>' +
        '           <textarea id="comentario" name="comentario" type="text" class="form-control" placeholder="Comentarios" rows="10"></textarea>' +
        '   </td>'+
        '   </tr>'+
        '</table>';

    $("#comentarios")
        .append(htmlComentarios);

        $("#modalACTitulo")
            .data('idplanilla',idplanilla)
            .text('Agregar registro, planilla nº: ' + NumeroPlanilla);






    $("#modalAC")
        .modal('show')
        .modal('handleUpdate');

    //evento del botón aceptar, llama a las verificaciones
    $("#modalACAceptar")
        .unbind('click')
        .click(verificarCampos);

    //esconde el campo de cometarios de vivienda por defecto
    $("#comentarioTipoVivienda").hide();

    fillDropDown();

    if(typeof(filaid) != 'undefined'){

        completarDatos(filaid);

        editar = 1;
    }else{
        editar = 0;
    }

}

function completarDatos(filaid){


    $("#modalACTitulo")
        .text('Editar registro');

    $.ajax({
        url: server_host + ":" + server_port + server_url + "/api/IncluirSalud/ObtenerFilaPlanilla?id=" + filaid,
        method: "GET",
        dataType: "json",

        beforeSend: function()
        {

            swal("Espere...", "Se están completando los datos", "info");
        }

    }).done(function(res){
        //Tiempo de creacion sugerido para el swalert
        setTimeout(function(){
            swal.close();
        },500)

        //datos para completar
        var data = res[0];

        //datos personales

        $("#nombre").val(data.Nombre);

        $("#apellido").val(data.Apellido);

        $("#dni").val(data.DNI);

        //el json trae un error de ortografía

        var conversorDeSexo = data.Sexo === 'Masculino' ? 1 : 2;

        $("#fechaNacimiento").val(data.FechaNacimiento);

        $("#sexo").val(conversorDeSexo);

        $("#tel").val(data.Telefono);




         //localizacion
        $('.selectDepartamento')
            .empty()
            .append('<option selected value="' + data.DepartamentoID + '">'+ data.DepartamentoNombre +'</option>')
            .trigger('change');


        $('.selectLocalidad')
            .empty()
            .append('<option selected value="' + data.LocalidadID + '">'+ data.Localidad +'</option>')
            .trigger('change');

        $("#domicilio").val(data.Domicilio);

        $(".selectBarrio")
            .val(data.Barrio)
            .trigger('change');

        $("#lat").val(data.Latitud);
        $("#lon").val(data.Longitud);

        $("#lat").trigger('change');


        //Prestaciones

        if(data.Titularidad == 1)
        {
            $(".btn-light").first().button("toggle");
        }
        else
        {
            $(".btn-light").slice(1,2).button("toggle");

        }

        $("#ingresosDeclarados").val(data.IngresosDeclarados);

        if(data.enlace_prestaciones)

        $(".selectPrestaciones")
            .empty();

        for(var index in data.enlace_prestaciones){

            $(".selectPrestaciones")
                .append('<option selected value="' + data.enlace_prestaciones[index].PrestacionID + '">'+ data.enlace_prestaciones[index].PrestacionID + ' - ' + data.enlace_prestaciones[index].PrestacionNombre +'</option>')
        }

        $(".selectPrestaciones")
            .trigger('change');

        if(data.enlace_tipoPension.length !== 0){


            $(".selectTipoPension")
                .val(data.enlace_tipoPension[0].PensionID)
                .trigger('change');
        }




        $('.selectCIE10')
            .empty();

        if(data.enlace_diagnosticos.length !== 0){

            for(var index in data.enlace_diagnosticos){

                $('.selectCIE10')
                    .append('<option selected value="' + data.enlace_diagnosticos[index].DiagnosticoID + '">'+ data.enlace_diagnosticos[index].DiagnosticoID + ' - ' + data.enlace_diagnosticos[index].DiagnosticoNombre +'</option>')

            }

        }else{

            $('.selectCIE10')
                .append('<option selected value="000">(000) Sin diagnóstico</option>')
        }

        $('.selectCIE10')
            .trigger('change');


        //Vivienda

        $("#conviven").val(data.NroIntegrantesConviven);
        $("#grupo").val(data.NroPersonasConviven);

        //$(".selectTipoVivienda").val();
        $("#comentario").val(data.Comentario);


        if(data.enlace_serviciosBasicos.length !== 0){

            for(var index in data.enlace_serviciosBasicos){

                $(".selectTipoServicios")
                    .append('<option selected value="' + data.enlace_serviciosBasicos[index].ServicioID + '">'+ data.enlace_serviciosBasicos[index].ServicioID + ' - ' + data.enlace_serviciosBasicos[index].ServicioNombre +'</option>');
            }

        }

        $(".selectTipoServicios ")
            .trigger('change');

        /*DropDown de motivos*/
        $("#sel-1").val(data.motivoPersonalID);
        $("#sel-2").val(data.motivoLocalizacionID);
        $("#sel-3").val(data.motivoPrestacionID);
        $("#sel-4").val(data.motivoViviendaID);

    })
}

//verificación
function verificarCampos(){

    //bandera para comprobar que no salió alguna corrección
    var error = false;

    //si falleció solamente son obligatorios algunos campos personales e incluso estos no son obligatorios con motivo
    var fallecido = $("#fallecido").prop('checked');

    //alerta de errores por grupo
    var grupos = [
        {
            clase: '.personales',
            alerta: false
        },
        {
            clase: '.localizacion',
            alerta: false
        },
        {
            clase: '.prestacion',
            alerta: false
        },
        {
            clase: '.vivienda',
            alerta: false
        }
    ];


    //es un toggle de alerta
    function mostrarError(condition,selector){

        if(condition){
            $(selector)
                .addClass('bg-warning');
        }else{
            $(selector)
                .removeClass('bg-warning');
        }
    }

    //función genérica para inputs simples
    function inputsVacios(selector,indice){

        if(!selector.prop('checked')){

            if(selector.val() === ''){
                mostrarError(true,selector);
                error = true;
                grupos[indice].alerta = true;

            }else{
                mostrarError(false,selector);

            }

        }
    }

    //función genérica para comprobar errores en select2 de simple selección
    function errorEnSelect2(selector,indice){

        if((selector).val()){

            $(selector)
                .next()
                .find('.select2-selection')
                .removeClass('bg-warning');

        }else{
            $(selector)
                .next()
                .find('.select2-selection')
                .addClass('bg-warning');

            error = true;

            grupos[indice].alerta = true;
        }
    }

    //función genérica par acomprobar errores en selec2 de selección múltiple
    function errorEnSelect2Multiple(selector,indice){

        if($(selector).val().length !== 0){

            $(selector)
                .next()
                .find('.select2-selection--multiple')
                .removeClass('bg-warning');

        }else{
            $(selector)
                .next()
                .find('.select2-selection--multiple')
                .addClass('bg-warning');

            error = true;

            grupos[indice].alerta = true;
        }
    }


    //datos personales
    if(!$("#mot-1").prop('checked')){

        //si no paró las patas
        if(fallecido){

            //nombre
            inputsVacios($("#nombre"),0);
            //apellido
            inputsVacios($("#apellido"),0);
            //dni
            inputsVacios($("#dni"),0);
            //fecha
            inputsVacios($("#fechaNacimiento"),0);
            //teléfono
            inputsVacios($("#tel"),0);

            //sexo
            if($("#sexo").val() === '3'){

                error = true;
                grupos[0].alerta = true;

                $("#sexo").addClass('bg-warning');
            }else{
                $("#sexo").removeClass('bg-warning');
            }

        }else{

            //datos obligatorios en caso de fallecido

            //nombre
            inputsVacios($("#nombre"),0);
            //apellido
            inputsVacios($("#apellido"),0);
            //fecha de defunción
            inputsVacios($("#defuncion"),0);
        }
    }

    //datos de localización
    if(!$("#mot-2").prop('checked')){

        if(fallecido){

            //departamento
            errorEnSelect2($(".selectDepartamento"),1);

            //localidad
            errorEnSelect2($(".selectLocalidad"),1);

            //calle
            inputsVacios($("#domicilio"),1);

            //barrio
            errorEnSelect2($(".selectBarrio"),1);

            //latitud
            inputsVacios($("#lat"),1);

            //longitud
            inputsVacios($("#lon"),1);

        }
    }

    //datos de prestación
    if(!$("#mot-3").prop('checked')){

        if(fallecido) {

            //titularidad
            if ($("#btnTitular").prop('checked') || $("#btnAdherente").prop('checked')) {

                $("#titular").removeClass('alert alert-warning');
            } else {
                error = true;
                grupos[2].alerta = true;
                $("#titular").addClass('alert bg-warning');
            }

            //tipo de pensión
            errorEnSelect2($(".selectTipoPension"), 2);

            //diagnóstico
            errorEnSelect2Multiple($(".selectCIE10"), 2);

            //prestaciones
            errorEnSelect2Multiple($(".selectPrestaciones"), 2);
        }
    }

    //vivienda

    if(!$("#mot-4").prop('checked')) {

        if (fallecido) {

            //nº de personas que conviven
            inputsVacios($("#conviven"),3)

            //nº de grupo familiar
            inputsVacios($("#grupo"),3)

            //servicios básicos
            errorEnSelect2Multiple($(".selectTipoServicios"), 3);
        }
    }



    //console.dir(grupos)

    for(var index in grupos){

        if(grupos[index].alerta){

            $(grupos[index].clase).show();
        }else{

            $(grupos[index].clase).hide();
        }
    }

    if(error){

        swal("Incluir Salud", "verifique los datos ingresados!", "warning");
    }else{
        swal("Espere por favor...", "Se están enviando los datos", "info");
        armarJSON();
    }

}



function armarJSON(){

    var data = {
        enlace_tipoPension: [],
        enlace_prestaciones: [],
        enlace_serviciosBasicos: [],
        enlace_diagnosticos: [],
    };

    //en caso de que el encuestado esté fallecido
    if(!$('#fallecido').prop('checked')){

        if($("#nombre").val().trim() == '')
            $("#nombre").val('Nombre no declarado');


        data.nombre = $("#nombre").val();

        if($("#apellido").val().trim() == '')
            $("#apellido").val('Apellido no declarado');


        data.IngresosDeclarados = $("#ingresosDeclarados").val();

        data.apellido = $("#apellido").val();

        if($("#defuncion").val() === ''){

            $("#defuncion").val('01/01/1900');
            fn = $("#defuncion").val().split('/');
            data.fechaDefuncion = fn[2]+'-'+fn[1]+'-'+fn[0];

        }else{
            fn = $("#defuncion").val().split('/');
            data.fechaDefuncion = fn[2]+'-'+fn[1]+'-'+fn[0];
        }


        enviarDatos(data);

    //caso común de la encuesta
    }else{



        //planilla
        if(filaID) data.ID = filaID;

        data.planillaID = planillaid;
        //personales
        if($("#nombre").val().trim() == '')
            $("#nombre").val('Nombre no declarado');


        data.nombre = $("#nombre").val();

        if($("#apellido").val().trim() == '')
            $("#apellido").val('Apellido no declarado');


        data.apellido = $("#apellido").val();

        var fd = $("#defuncion").val().split('/');
        data.fechaDefuncion = typeof(fd[0]) === 'undefined' ? fd[2]+'-'+fd[1]+'-'+fd[0] : null;

        var fn;

        if($("#fechaNacimiento").val() === ''){

            $("#fechaNacimiento").val('01/01/1900');
            fn = $("#fechaNacimiento").val().split('/');
            data.fechaNacimiento = fn[2]+'-'+fn[1]+'-'+fn[0];

        }else{
            fn = $("#fechaNacimiento").val().split('/');
            data.fechaNacimiento = fn[2]+'-'+fn[1]+'-'+fn[0];
        }



        data.dni = $("#dni").val();
        data.tipoSexoID = $("#sexo").val();
        data.tel = $("#tel").val();
        //localizacion
        data.localidadID = $(".selectLocalidad").val();
        data.domicilio  = $("#domicilio").val();
        data.barrio = $(".selectBarrio").val();
        data.latitud = $("#lat").val();
        data.longitud = $("#lon").val();
        data.departamentoID = $(".selectDepartamento").val();
        //prestación
        data.tipoBeneficiarioID = $("#btnTitular").prop('checked') ? 1 : 2;
        data.IngresosDeclarados = $("#ingresosDeclarados").val();

        data.enlace_tipoPension = [
            {

                tipoPensionID: $(".selectTipoPension ").val(),
                filaPlanillaID: filaID ? filaID : 0
            }
        ];


        var diagnosticos = $(".selectCIE10").val();

        for(var index in diagnosticos){

            data.enlace_diagnosticos.push({
                id10: diagnosticos[index],
                filaPlanillaID: filaID ? filaID : 0
            });
        }

        var prestaciones = $(".selectPrestaciones").val();

        for(var index in prestaciones){

            data.enlace_prestaciones.push({
                prestacionID: prestaciones[index],
                filaPlanillaID: filaID ? filaID : 0
            });
        }

        //vivienda
        data.nroPersonasConviven = $("#conviven").val();
        data.nroIntegrantesBeneficiario = $("#grupo").val();
        data.tipoViviendaID = $(".selectTipoVivienda").val();
        data.tipoViviendaDetalle = $("#comentarioTipoVivienda").val();
        //data.enlace_serviciosBasicos = $(".selectTipoServicios").val();

        var serviciosBasicos = $(".selectTipoServicios").val();

        for(var index in serviciosBasicos){

            data.enlace_serviciosBasicos.push({
                serviciosBasicosID: serviciosBasicos[index],
                filaPlanillaID: filaID ? filaID : 0
            });
        }

        /*DropDown de motivos*/
        data.motivoPersonalID = $("#sel-1").val();
        data.motivoLocalizacionID = $("#sel-2").val();
        data.motivoPrestacionID = $("#sel-3").val();
        data.motivoViviendaID = $("#sel-4").val();

        data.comentario = $("#comentario").val();
        console.dir(data)
        enviarDatos(data);
    }

}

function enviarDatos(jsonDATA){



    var url =
        (editar==0)
            ?
            server_host+":"+server_port+server_url+"/api/IncluirSalud/GuardarFilaPlanilla"
            :
            server_host+":"+server_port+server_url+"/api/IncluirSalud/ActualizarFilaPlanilla";

    $.ajax({
        url: url,
        method: "POST",
        dataType: "json",
        data: jsonDATA
    })
        .done(function(res){

            if(typeof(res)=="undefined")
                {

                    swal.close();
                    swal("Incluir Salud", (editar==1) ? "Se ha editado el registro" :  "Se agregó un nuevo registro!", "success");
                    setTimeout(function(){

                        $("#modalAC").modal("hide");
                        $("#registrosTable").empty();
                        swal.close();

                        mostarRegistros(planilla_back,encuestador_back,supervisor_back, numeroplanulla_back);

                        },1500)
                }
                else
                {
                    console.dir(res);
                }

        });
}

function fillDropDown(){

    $("#fechaNacimiento")
        .datepicker({
            autoclose: true,
            language: 'es',
            container: $("#modalAC"),
            format: 'dd/mm/yyyy',
            orientation: 'bottom'
        });

    $("#defuncion")
        .datepicker({
            autoclose: true,
            language: 'es',
            container: $("#modalAC"),
            format: 'dd/mm/yyyy',
            orientation: 'bottom'
        });

    $(".selectTipoPension")
        .select2({
            placeholder: 'Elija tipo de pensión',
            width: '100%',
            language: 'es',
            dropdownParent: $("#modalACBody"),
            //minimumResultsForSearch: -1,
            data: tipoPension
        });

    $(".selectBarrio")
        .select2({
            placeholder: 'Elija barrio',
            width: '100%',
            language: 'es',
            dropdownParent: $("#modalACBody")
        });

    $(".selectTipoVivienda")
        .select2({
            placeholder: 'Elija tipo de vivienda',
            dropdownParent: $("#modalACBody"),
            width: '100%',
            language: 'es',
            //minimumResultsForSearch: -1,
            data: tipoVivienda
        })
        .on('select2:select',function(e){
            if(e.params.data.text === "Otros"){
                $("#comentarioTipoVivienda")
                    .show();
            }else{
                $("#comentarioTipoVivienda")
                    .hide();
            }
        });

    $(".selectTipoServicios")
        .select2({
            placeholder: 'Elija tipo de vivienda',
            dropdownParent: $("#modalACBody"),
            width: '100%',
            language: 'es',
            //minimumResultsForSearch: -1,
            multiple: true,
            data: tipoServicios
        }).on('select2:select',function(e){

    });


    $(".selectDepartamento").select2({
        dropdownParent: $("#modalACBody"),
        placeholder: 'Busque departamento',
        width: '100%',
        language: 'es',
        ajax: {
            url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/ObtenerDepartamentos?id="+ 18, // San Juan
            type: 'GET',
            dataType: 'json',
            delay: 250,
            data: function (params) {

                return {
                    searchTerm: params.term // search term
                };
            },
            processResults: function (response) {
                return {
                    results: response
                };
            },
            cache: true
        }
    });

    $(".selectLocalidad").select2({
        dropdownParent: $("#modalACBody"),
        placeholder: 'Busque localidad',
        width: '100%',
        language: 'es',
        ajax: {
            url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/ObtenerLocalidades?id="+ $(".selectDepartamento").val(),
            type: 'GET',
            dataType: 'json',
            delay: 250,
            data: function (params) {

                return {
                    searchTerm: params.term // search term
                };
            },
            processResults: function (response) {
                return {
                    results: response
                };
            },
            cache: true
        }
    });


    $(".selectDepartamento").change(function(){
        $(".selectLocalidad").empty();
        $(".selectLocalidad").select2({
            dropdownParent: $("#modalACBody"),
            placeholder: 'Busque localidad',
            width: '100%',
            language: 'es',
            ajax: {
                url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/ObtenerLocalidades?id="+ $(".selectDepartamento").val(),
                type: 'GET',
                dataType: 'json',
                delay: 250,
                data: function (params) {

                    return {
                        searchTerm: params.term // search term
                    };
                },
                processResults: function (response) {
                    return {
                        results: response
                    };
                },
                cache: true
            }
        });
    })




    $(".selectCIE10").select2({
        width: '100%',
        dropdownAutoWidth: true,
        multiple: true,
        language: 'es',
        minimumInputLength: 3,
        dropdownParent: $("#modalACBody"),
        ajax: {
            //url: '/planillas/getCIE10',
            url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/ObtenerCIE10",
            type: 'GET',
            dataType: "json",
            delay: 250,
            data: function (params) {

                return {
                    searchTerm: params.term // search term
                };
            },
            processResults: function (response) {
                return {
                    results: response
                };
            },
            cache: true
        }
    });



// Fetch the preselected item, and add to the control


    //**//
    $(".selectPrestaciones").select2({
        placeholder: 'Elija prestaciones',
        width: '100%',
        language: 'es',
        //minimumInputLength: 3,
        multiple: true,
        dropdownParent: $("#modalACBody"),
        ajax: {
            //url: '/planillas/getCIE10',
            url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/ObtenerPrestaciones",
            type: 'GET',
            dataType: "json",
            delay: 250,
            data: function (params) {

                return {
                    searchTerm: params.term // search term
                };
            },
            processResults: function (response) {
                return {
                    results: response
                };
            },
            cache: true
        }

    });
}



function initMap() {
    var latitude = -31.536395; // YOUR LATITUDE VALUE
    var longitude = -68.536976; // YOUR LONGITUDE VALUE

    var myLatLng = {lat: latitude, lng: longitude};

    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 14,
        disableDoubleClickZoom: true, // disable the default map zoom on double click
        fullscreenControl: false
    });

    // Update lat/long value of div when anywhere in the map is clicked
    google.maps.event.addListener(map,'click',function(event) {


        var latlng = {lat:event.latLng.lat(),lng: event.latLng.lng() };

        var latt = event.latLng.lat();

        latt = latt
            .toString()
        //.slice(4);

        var longg = event.latLng.lng();
        longg = longg
            .toString()
        //.slice(4);

        $("#lat").val(latt);
        $("#lon").val(longg);

        if(marker){
            marker.setMap(null);
        }

        marker = new google.maps.Marker({
            position: latlng,
            map: map,
            //title: 'Hello World'

            // setting latitude & longitude as title of the marker
            // title is shown when you hover over the marker
            title: latitude + ', ' + longitude
        });

    });

    $("#lat").on('change', function(){

        setMapPoint($(this).val(),$("#lon").val() );
    });

    $("#lon").on('change', function(){

        setMapPoint($("#lat").val(),+ $(this).val() );
    });

    function setMapPoint(lat, lng){


        var latlng = {lat: parseFloat(lat) , lng: parseFloat(lng) };

        //console.log(latlng)
        if(marker){
            marker.setMap(null);
        }

        map
            .setCenter(latlng);

        marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: 'Hello World!'
        });

    }
}
