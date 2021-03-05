<?php

namespace App\View\Components\AppLayout;

use Illuminate\View\Component;

class NavigationMenuGuest extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        return view('components.app-layout.navigation-menu-guest');
    }
}
