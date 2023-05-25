import React from 'react'
import { about1, about2 } from "../../index";

const About = () => {
    return (
        <section className='pt-[75px] pb-28'>
            <div className='max-w-screen-xl mx-auto px-4'>
                <div className='flex flex-col md:flex-row pb-36'>
                    <div className='px-4'>
                        <div className='pt-2 pr-0 md:pr-4 lg:pr-[85px]'>
                            <h3 className='pb-4 font-bold text-2xl'>Our Story</h3>
                            <p className='pb-6 opacity-60'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim,
                                non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue.
                                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam,
                                eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim.
                                Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor,
                                eget facilisis diam faucibus et. Morbi a tempor elit.
                            </p>
                            <p className='pb-6 opacity-60'>
                                Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
                                sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat.
                                Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum,
                                neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur,
                                quam velit convallis ipsum, et maximus enim ligula ac ligula.
                            </p>
                            <p className='pb-6 opacity-60'>
                                Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+84) 096 716 6879
                            </p>
                        </div>
                    </div>
                    <div className='px-5 md:px-4 md:flex-[0_0_42%] lg:flex-[0_0_32%]'>
                        <div className='relative before:absolute before:-bottom-5 before:-right-5
                        md:before:-left-5 before:border-[3px] before:border-[#ccc]
                        before:w-full before:h-full before:-z-10'>
                            <div className='overflow-hidden'>
                                <img src={about1} alt="about"
                                    className='hover:scale-110 transition-all duration-700'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col-reverse md:flex-row'>
                    <div className='px-5 md:px-4 md:flex-[0_0_42%] lg:flex-[0_0_32%]'>
                        <div className='relative before:absolute before:-bottom-5 before:-right-5
                        before:border-[3px] before:border-[#ccc]
                        before:w-full before:h-full before:-z-10'>
                            <div className='overflow-hidden'>
                                <img src={about2} alt="about"
                                    className='hover:scale-110 transition-all duration-700'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='px-4 pb-8'>
                        <div className='pt-2 pl-0 md:pl-4 lg:pl-[85px]'>
                            <h3 className='pb-4 font-bold text-2xl'>Our Mission</h3>
                            <p className='pb-6 opacity-60'>
                                Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor.
                                Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor,
                                consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio.
                                Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante.
                                Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit,
                                eget elementum libero iaculis.
                            </p>
                            <div className='border-l-[3px] border-[#e6e6e6] mt-5
                            pb-2 pl-8'>
                                <p className='italic pr-10 pb-3 opacity-70'>
                                    "Creativity is just connecting things. When you ask creative people how they did something,
                                    they feel a little guilty because they didn't really do it,
                                    they just saw something. It seemed obvious to them after a while."
                                </p>
                                <span className='text-sm ml-2'>- Steve Job’s</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About