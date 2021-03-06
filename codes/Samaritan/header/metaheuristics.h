/*
 * metaheuristics.h:
 *  This is the header file for metaheuristics.
 *
 * Authors:
 *  Renzhi Chen <rxc332@cs.bham.ac.uk>
 *  Ke Li <k.li@exeter.ac.uk>
 *
 * Institution:
 *  Computational Optimization and Data Analytics (CODA) Group @ University of Exeter
 *
 * Copyright (c) 2017 Renzhi Chen, Ke Li
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

#ifndef SAMARITAN_METAHEURISTICS_H
#define SAMARITAN_METAHEURISTICS_H

# include "global.h"
# include "analyse.h"
# include "initialization.h"
# include "memory.h"
# include "problems.h"
# include "population.h"
# include "reproduction.h"
# include "selection.h"

void CTAEA (population_real *parent_pop, population_real *offspring_pop, population_real *mixed_pop);

#endif //SAMARITAN_METAHEURISTICS_H
