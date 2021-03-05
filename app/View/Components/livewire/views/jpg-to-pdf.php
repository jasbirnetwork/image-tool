<?php

namespace App\View\Components\livewire\views;

use Illuminate\View\Component;

class jpg-to-pdf extends Component
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
        return view('components.livewire.views.jpg-to-pdf');
    }
}
