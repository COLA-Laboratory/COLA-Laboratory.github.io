/*
 * C3-DTLZ4.c
 *
 * Authors:
 *  Renzhi Chen <rxc332@cs.bham.ac.uk>
 *  Ke Li <k.li@exeter.ac.uk>
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

#include "../../header/problems.h"

void c3dtlz4 (individual_real *ind)
{
    int i, j, k, aux;
    double gx, alpha, fsum, re, temp_cv;
    double *xreal, *obj;

    obj   = ind->obj;
    xreal = ind->xreal;

    gx    = 0.0;
    alpha = 100.0;
    k     = number_variable - number_objective + 1;
    for(i = number_variable - k; i < number_variable; i++)
        gx += pow ((xreal[i] - 0.5), 2.0);

    for (i = 0; i < number_objective; i++)
        obj[i] = 1.0 + gx;

    for (i = 0; i < number_objective; i++)
    {
        for (j = 0; j < number_objective - (i + 1); j++)
            obj[i] *= cos (PI * 0.5 * pow (xreal[j], alpha));
        if (i != 0)
        {
            aux     = number_objective - (i + 1);
            obj[i] *= sin (PI * 0.5 * pow (xreal[aux], alpha));
        }
    }

    re = 0.0;
    for (j = 0; j < number_objective; j++)
    {
        fsum = 0.0;
        for (i = 0; i < number_objective; i++)
        {
            if (i != j)
                fsum += obj[i] * obj[i];
        }
        temp_cv = fsum + obj[j] * obj[j] / 4.0 - 1.0;
        if (temp_cv < 0.0)
            re += temp_cv;
    }

    ind->cv = re;
}
