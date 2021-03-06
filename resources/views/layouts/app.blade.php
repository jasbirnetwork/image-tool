<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="{{ asset('theame/images/favicon.ico') }}">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    @livewireStyles
</head>
<body class="bg-white">
    
    <x-app-layout.navigation-menu-guest />

    <x-app-layout.home-background-section />

    <x-livewire.views.jpg-to-pdf />

    <x-app-layout.home-footer-section />
    
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/ad.js') }}" async></script>
    <script src="{{ asset('theame/js/app.js') }}" defer></script>
    <script src="{{ asset('fileupload/fileupload.js') }}" defer></script>
    @yield('javascript')
    @livewireScripts
</body>
</html>
